import { useQuery } from "@tanstack/react-query";
import { getSeveralBrowseCategories } from "../apis/searchApi";
import useClientCredentialToken from "./useClientCredentialToken";
import {
  GetSeveralBrowseCategoriesRequest,
  GetSeveralBrowseCategoriesResponse,
} from "../models/search";

const useGetSeveralBrowseCategories = (
  params?: GetSeveralBrowseCategoriesRequest
) => {
  const clientCredentialToken = useClientCredentialToken();

  return useQuery<GetSeveralBrowseCategoriesResponse>({
    queryKey: ["browse-categories", params],
    queryFn: () => {
      if (!clientCredentialToken) {
        throw new Error("No token available");
      }
      return getSeveralBrowseCategories(clientCredentialToken);
    },
    enabled: !!clientCredentialToken,
  });
};

export default useGetSeveralBrowseCategories;
