import { Movie, MovieDetails } from "../interface";
import { trpc } from "../src/utils/trpc";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";

const useFavourites = (movie?: MovieDetails | Movie) => {
  const utils = trpc.useContext();

  const { mutate: createFavourite } =
    trpc.favourite.createFavourite.useMutation({
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
      onSettled: () => {
        // Always refetch after error or success:
        utils.favourite.getUserFavourites.invalidate();
      },
    });

  const { mutate: deleteFavourite } =
    trpc.favourite.deleteFavourite.useMutation({
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
      onSettled: () => {
        // Always refetch after error or success:
        utils.favourite.getUserFavourites.invalidate();
      },
    });

  const { data: userFavourites } = trpc.favourite.getUserFavourites.useQuery();
  const router = useRouter();
  const [favorited, setFavorited] = useState(false);

  const addedToFavourites = userFavourites?.find(
    (favourite) => favourite.movieId === movie?.id
  );

  const handleDeleteFavourite = async () => {
    const toastId = toast.loading("Deleting favourite");
    setFavorited(false);

    try {
      await deleteFavourite({ favouriteId: addedToFavourites?.id as string });

      toast.success(`Successfully deleted `, {
        id: toastId,
      });
    } catch (err) {
      toast.error("Oops!, There's an error");
      console.log(err);
    }
  };

  const handleAddFavourite = async (
    vote_average: number,
    title: string,
    poster_path: string,
    movieId: number,
    release_date: string
  ) => {
    const toastId = toast.loading("Adding to favourites");
    setFavorited(true);
    try {
      await createFavourite({
        vote_average,
        title,
        poster_path,
        movieId,
        release_date,
        type: router.pathname.includes("/movie") ? "movie" : "tv",
      });
      toast.success("Favourited", {
        id: toastId,
      });
    } catch (err) {
      toast.error("Oops!, There's an error");
    } finally {
      router.push("/favourites");
    }
  };

  return {
    userFavourites,
    handleAddFavourite,
    handleDeleteFavourite,
    favorited,
    addedToFavourites,
  };
};

export default useFavourites;
