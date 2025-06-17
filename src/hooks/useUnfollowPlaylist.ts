import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePlaylist } from "../apis/playlistApi";

const useUnfollowPlaylist = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({playlist_id}:{playlist_id: string}) => {
      return deletePlaylist(playlist_id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["current-user-playlists"] });
      queryClient.invalidateQueries({ queryKey: ["playlist-detail"] });
      queryClient.invalidateQueries({ queryKey: ["playlist-items"] });
      // console.log("플레이리스트 삭제 성공!");
    },
  });
};

export default useUnfollowPlaylist;
