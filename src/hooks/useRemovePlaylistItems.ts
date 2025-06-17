import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removePlaylistItem } from "../apis/playlistApi";
import { RemovePlaylistItemRequest } from "../models/playlist";

const useRemovePlaylistItems = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params: RemovePlaylistItemRequest) => {
      return removePlaylistItem(params);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["current-user-playlists"] });
      queryClient.invalidateQueries({ queryKey: ["playlist-detail"] });
      queryClient.invalidateQueries({ queryKey: ["playlist-items"] });
      // console.log("곡 삭제 성공!");
    },
  });
};

export default useRemovePlaylistItems;
