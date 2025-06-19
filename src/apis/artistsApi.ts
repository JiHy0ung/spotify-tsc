import axios from "axios";
import { SPOTIFY_BASE_URL } from "../configs/commonConfig";
import { Artist } from "../models/artist";

export const getSeveralArtists = async (
  clientCredentialToken: string,
  artistsIds: string
): Promise<{ artists: Artist[] }> => {
  try {
    const response = await axios.get(`${SPOTIFY_BASE_URL}/artists`, {
      headers: {
        Authorization: `Bearer ${clientCredentialToken}`,
      },
      params: {
        ids: artistsIds,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch Several Artists.");
  }
};
