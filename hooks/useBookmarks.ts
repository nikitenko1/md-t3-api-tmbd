import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import { Movie, MovieDetails } from "../interface";
import { trpc } from "../src/utils/trpc";

const useBookmark = (movie?: MovieDetails | Movie) => {
  const utils = trpc.useContext();

  const router = useRouter();

  const { mutateAsync: createBookmark } =
    trpc.bookmark.createBookmark.useMutation({
      // When mutate is called:
      onMutate: () => {
        // Cancel any outgoing refetches
        // (so they don't overwrite our optimistic update)
        utils.favourite.getUserFavourites.cancel();
        // Snapshot the previous value
        const optimisticUpdate = utils.favourite.getUserFavourites.getData();

        if (optimisticUpdate) {
          // Optimistically update to the new value
          utils.favourite.getUserFavourites.setData(optimisticUpdate);
        }
      },
      // Always refetch after error or success:
      onSettled: () => {
        utils.bookmark.getUserBookmarks.invalidate();
      },
    });

  const { mutateAsync: deleteBookmark } =
    trpc.bookmark.deleteBookmark.useMutation({
      // When mutate is called:
      onMutate: () => {
        // Cancel any outgoing refetches
        // (so they don't overwrite our optimistic update)
        utils.favourite.getUserFavourites.cancel();
        // Snapshot the previous value
        const optimisticUpdate = utils.favourite.getUserFavourites.getData();

        if (optimisticUpdate) {
          // Optimistically update to the new value
          utils.favourite.getUserFavourites.setData(optimisticUpdate);
        }
      },
      // Always refetch after error or success:
      onSettled: () => {
        utils.bookmark.getUserBookmarks.invalidate();
        router.push("/bookmarks");
      },
    });

  const { data: userBookmarks } = trpc.bookmark.getUserBookmarks.useQuery();

  const [bookmarked, setBookmarked] = useState(false);

  const addedToBookmarks = userBookmarks?.find(
    (bookmark) => bookmark.movieId === movie?.id
  );

  const handleDeleteBookmark = async () => {
    setBookmarked(false);

    await toast.promise(
      deleteBookmark({ bookmarkId: addedToBookmarks?.id as string }),
      {
        loading: "Deleting list",
        success: "List deleted",
        error: (err) => `Oops... something went wrong ` + err,
      }
    );
  };

  const handleAddBookmark = async (
    vote_average: number,
    title: string,
    poster_path: string,
    movieId: number,
    release_date: string
  ) => {
    await toast.promise(
      createBookmark({
        vote_average,
        title,
        poster_path,
        movieId,
        release_date,
        type: movie?.name ? "tv" : "movie",
      }),
      {
        loading: "Adding to bookmarks",
        success: `Bookmarked: ${addedToBookmarks?.id}`,
        error: (err) => `Oops something went wrong - ${err}`,
      }
    );
  };

  return {
    userBookmarks,
    handleAddBookmark,
    handleDeleteBookmark,
    bookmarked,
    addedToBookmarks,
  };
};

export default useBookmark;
