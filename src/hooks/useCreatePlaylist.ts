import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPlaylist } from "../apis/playlistApi";
import useGetCurrentUserProfile from "./useGetCurrentUserProfile";
import { CreatePlaylistRequest } from "../models/playlist";

const useCreatePlaylist = () => {
  const queryClient = useQueryClient();
  const { data: user } = useGetCurrentUserProfile();
  return useMutation({
    mutationFn: (params: CreatePlaylistRequest) => {
      if (!user?.id) {
        return Promise.reject(new Error("User is not defined."));
      }
      return createPlaylist(user.id, params);
    },
    onSuccess: () => {
      // 성공하면 플레이리스트를 리프레쉬해서 바로 보이도록.
      queryClient.invalidateQueries({ queryKey: ["current-user-playlists"] });
      console.log("성공!");
    },
  });
};

export default useCreatePlaylist;
