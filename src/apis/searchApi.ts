import axios from "axios";
import { SPOTIFY_BASE_URL } from "../configs/commonConfig";
import {
  GetSeveralBrowseCategoriesRequest,
  GetSeveralBrowseCategoriesResponse,
  SearchRequestParams,
} from "../models/search";
import api from "../utils/api";

export const searchItemByKeyword = async (
  token: string,
  params: SearchRequestParams
) => {
  try {
    const searchParams = new URLSearchParams();
    searchParams.append("q", params.q);
    searchParams.append("type", params.type.join(",")); // type이 배열이기 때문에 join 사용.

    if (params.market) {
      searchParams.append("market", params.market);
    }
    if (params.limit) {
      searchParams.append("limit", params.limit.toString());
    }
    if (params.offset) {
      searchParams.append("offset", params.offset.toString());
    }
    if (params.include_external) {
      searchParams.append("include_external", params.include_external);
    }

    // 로그인 유무와 상관없이 검색이 가능해야하기 떄문에 api.get이 아닌 axios.get을 사용.
    const response = await axios.get(
      `${SPOTIFY_BASE_URL}/search?${searchParams.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Failed to search items by keyword.");
  }
};

export const getSeveralBrowseCategories = async (
  token: string,
  params?: GetSeveralBrowseCategoriesRequest
): Promise<GetSeveralBrowseCategoriesResponse> => {
  try {
    const response = await axios.get(`${SPOTIFY_BASE_URL}/browse/categories`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch browse categories.");
  }
};
