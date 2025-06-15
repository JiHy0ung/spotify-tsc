import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removePlaylistItem } from "../apis/playlistApi";

const useRemovePlaylistItems = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (playlist_id: string) => {
      return removePlaylistItem(playlist_id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["current-user-playlists"] });
      queryClient.invalidateQueries({ queryKey: ["playlist-detail"] });
      queryClient.invalidateQueries({ queryKey: ["playlist-items"] });
      console.log("곡 삭제 성공!");
    },
  });
};

export default useRemovePlaylistItems;
