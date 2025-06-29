import { ApiResponse } from "./apiResponse";
import { Artist } from "./artist";
import { ExternalUrls, Image, Restriction } from "./commonType";
import { Copyright } from "./track";

export interface getNewReleaseResponse {
  albums: ApiResponse<SimplifiedAlbum>;
}

export interface SimplifiedAlbum {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions?: Restriction;
  type: string;
  uri: string;
  artists: Artist[];
  copyrights: Copyright[];
  external_ids: {
    isrc?: string;
    ean?: string;
    upc?: string;
  };
  label: string;
  popularity:number;
}
