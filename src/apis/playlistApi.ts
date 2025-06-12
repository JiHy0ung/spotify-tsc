import {
  CreatePlaylistRequest,
  GetCurrentUserPlaylistRequest,
  GetCurrentUserPlaylistResponse,
  GetPlaylistItemsRequest,
  GetPlaylistRequest,
  Playlist,
  PlaylistItemsResponse,
} from "../models/playlist";
import api from "../utils/api";

export const getCurrentUserPlaylists = async ({
  limit,
  offset,
}: GetCurrentUserPlaylistRequest): Promise<GetCurrentUserPlaylistResponse> => {
  try {
    const response = await api.get(`/me/playlists`, {
      params: { limit, offset },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch current users playlists.");
  }
};

export const getPlaylist = async (
  params: GetPlaylistRequest
): Promise<GetCurrentUserPlaylistResponse> => {
  try {
    const response = await api.get(`/playlists/${params.playlist_id}`, {
      params,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch playlist detail.");
  }
};

export const getPlaylistItems = async (
  params: GetPlaylistItemsRequest
): Promise<PlaylistItemsResponse> => {
  try {
    const response = await api.get(`/playlists/${params.playlist_id}/tracks`, {
      params,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch playlist item.");
  }
};

export const createPlaylist = async (
  user_id: string,
  params: CreatePlaylistRequest
): Promise<Playlist> => {
  try {
    const { name, playlistPublic, collaborative, description } = params; // Body이기 때문에 구조 분해.
    const response = await api.post(`/users/${user_id}/playlists`, {
      name,
      public: playlistPublic, // 보낼때는 public으로 보내야 되서
      collaborative,
      description,
    });

    return response.data;
  } catch (error) {
    throw new Error("Failed to create new playlist.");
  }
};
