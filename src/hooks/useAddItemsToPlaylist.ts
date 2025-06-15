import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AddItemsToPlaylistRequest } from "../models/playlist";
import { addItemsToPlaylist } from "../apis/playlistApi";

const useAddItemsToPlaylist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params: AddItemsToPlaylistRequest) => {
      if (!params) {
        return Promise.reject(new Error("Playlist is not defined."));
      }
      return addItemsToPlaylist(params);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["current-user-playlists"] });
      queryClient.invalidateQueries({ queryKey: ["playlist-detail"] });
      queryClient.invalidateQueries({ queryKey: ["playlist-items"] });
      console.log("곡 추가 성공!");
    },
  });
};

export default useAddItemsToPlaylist;
