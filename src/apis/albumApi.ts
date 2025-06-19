import axios from "axios";
import { SPOTIFY_BASE_URL } from "../configs/commonConfig";
import { getNewReleaseResponse, SimplifiedAlbum } from "../models/album";

export const getNewRelease = async (
  clientCredentialToken: string
): Promise<getNewReleaseResponse> => {
  try {
    const response = await axios.get(
      `${SPOTIFY_BASE_URL}/browse/new-releases?limit=6`,
      {
        headers: {
          Authorization: `Bearer ${clientCredentialToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch new releases");
  }
};

export const getSeveralAlbums = async (
  albumsIds: string,
  clientCredentialToken: string
): Promise<{ albums: SimplifiedAlbum[] }> => {
  try {
    const response = await axios.get(`${SPOTIFY_BASE_URL}/albums`, {
      headers: {
        Authorization: `Bearer ${clientCredentialToken}`,
      },
      params: { ids: albumsIds },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch Several Albums.");
  }
};
