import { useInfiniteQuery } from "@tanstack/react-query";
import { searchItemByKeyword } from "../apis/searchApi";
import { SearchRequestParams } from "../models/search";
import useClientCredentialToken from "./useClientCredentialToken";

const useSearchItemsByKeyword = (params: SearchRequestParams) => {
  const clientCredentialToken = useClientCredentialToken();
  return useInfiniteQuery({
    queryKey: ["search", params],
    queryFn: ({ pageParam = 0 }) => {
      console.log("offset in fn:", pageParam);
      if (!clientCredentialToken) {
        throw new Error("No token available");
      }
      return searchItemByKeyword(clientCredentialToken, {
        ...params,
        offset: pageParam,
      });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const nextPageUrl =
        lastPage.albums?.next ||
        lastPage.artists?.next ||
        lastPage.playlists?.next ||
        lastPage.tracks?.next ||
        lastPage.shows?.next ||
        lastPage.episodes?.next ||
        lastPage.audiobooks?.next;

      console.log("nextPage URL:", lastPage.tracks?.next);

      if (nextPageUrl) {
        const nextOffset = new URL(nextPageUrl).searchParams.get("offset");
        return nextOffset ? parseInt(nextOffset) : undefined;
      }
      return undefined;
    },
  });
};

export default useSearchItemsByKeyword;
