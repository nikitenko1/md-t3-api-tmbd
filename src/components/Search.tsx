import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { searchResultsState, searchState } from "../../atoms/searchAtom";
import { mediaTypeState } from "../../atoms/mediaTypeAtom";
import { API_ENDPOINT } from "../pages/api/movie";
import { toast } from "react-hot-toast";
import { GoSearch } from "react-icons/go";
import { AiOutlineFilter } from "react-icons/ai";

const Search = () => {
  const API_KEY = process.env.NEXT_APP_API_KEY;
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useRecoilState(searchState);
  const [searchResults, setSearchResults] = useRecoilState(searchResultsState);

  const [mediaType, setMediaType] = useRecoilState(mediaTypeState);
  const [openFiltering, setOpenFiltering] = useState<boolean>(false);

  const submitSearch = async (term: string) => {
    try {
      const res = await fetch(
        `${API_ENDPOINT}search/${
          mediaType.split("-")[0]
        }?api_key=${API_KEY}&query=${term}`
      );
      const data = await res.json();
      setSearchResults(data?.results);
      router.push("/discovery");
    } catch (err) {
      toast.error(`Ooops! - ${err}`);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitSearch(searchTerm);
        setSearchTerm("");
      }}
    >
      <div className="relative flex w-full items-center gap-2 rounded-full bg-black px-4 py-2 text-gray-500">
        <GoSearch />
        <input
          type="search"
          className="w-full bg-transparent text-sm  outline-none"
          value={searchTerm}
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <AiOutlineFilter
          className="cursor-pointer"
          onClick={() => setOpenFiltering(!openFiltering)}
        />
      </div>
      {openFiltering && (
        <div className="relative mt-2 bg-black px-4 py-2 text-gray-500">
          <div className="space-y-2">
            <p
              className={`w-[80px] cursor-pointer rounded-full text-white ${
                mediaType === "movie" ? "font-bold" : ""
              }`}
              onClick={() => setMediaType("movie")}
            >
              Movie
            </p>
            <p
              className={`w-[80px] cursor-pointer rounded-full text-white ${
                mediaType === "tv-series" ? "font-bold" : ""
              }`}
              onClick={() => setMediaType("tv-series")}
            >
              TV
            </p>
          </div>

          <div className="arrow-up absolute -top-[6px] right-4"></div>
        </div>
      )}
    </form>
  );
};

export default Search;
