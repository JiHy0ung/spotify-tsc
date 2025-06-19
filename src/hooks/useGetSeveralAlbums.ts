import { useQuery } from "@tanstack/react-query";
import useClientCredentialToken from "./useClientCredentialToken";
import { getSeveralAlbums } from "../apis/albumApi";
import { ALBUM_IDS } from "../configs/commonConfig";

const useGetSeveralAlbums = () => {
  const clientCredentialToken = useClientCredentialToken();
  const albumsIds = ALBUM_IDS.join(",");

  return useQuery({
    queryKey: ["hot-albums", albumsIds],
    queryFn: () => {
      if (!clientCredentialToken) {
        throw new Error("No token available");
      }
      return getSeveralAlbums(albumsIds, clientCredentialToken);
    },
    enabled: !!clientCredentialToken,
  });
};

export default useGetSeveralAlbums;
