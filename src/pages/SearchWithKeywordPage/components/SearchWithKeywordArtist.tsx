import React from "react";
import { Artist } from "../../../models/artist";
import { Grid, styled, Typography } from "@mui/material";
import PlayButton from "../../../common/components/PlayButton";

interface SearchWithKeywordArtistProps {
  artists: Artist[];
}

const SearchArtistsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  paddingTop: "48px",
  [theme.breakpoints.down("xl")]: {
    paddingTop: "24px",
  },
}));

const SearchArtistsResultArea = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
  padding: "12px",
  borderRadius: "8px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#1f1f1f",
  },
  "&:hover .search-track-play-btn": {
    bottom: "70px",
    opacity: "1",
  },
});

const SearchArtistsCoverArea = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "165px",
  width: "165px",
});

const SearchArtistsCover = styled("img")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "165px",
  height: "165px",
  borderRadius: "50%",
  boxShadow: "0 8px 24px #00000080",
});

const SearchArtistsNoCoverArea = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "165px",
  width: "165px",
  backgroundColor: "#333",
  borderRadius: "50%",
  boxShadow: "0 8px 24px #00000080",
});

const SearchArtistsNoCover = styled("svg")({
  height: "64px",
  width: "64px",
  fill: "#ffffff",
});

const SearchArtistTextInfo = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignSelf: "flex-start",
  gap: "4px",
});

const SearchArtistName = styled(Typography)({
  "&:hover": {
    textDecoration: "underline",
  },
});

const SearchArtistPlayButtonArea = styled("div")({
  opacity: "0",
  position: "absolute",
  right: "20px",
  bottom: "50px",
  transition: "all 0.3s ease",
});

const SearchWithKeywordArtist = ({ artists }: SearchWithKeywordArtistProps) => {
  return (
    <SearchArtistsContainer>
      <Typography variant="h1" marginBottom={"8px"}>
        아티스트
      </Typography>
      <Grid
        width={"100%"}
        container
        spacing={{ xl: 0, lg: 2, md: 2, sm: 4, xs: 6 }}
      >
        {artists.slice(0, 6).map((artist) => {
          return (
            <Grid size={{ lg: 4, xs: 6, xl: 2 }}>
              <SearchArtistsResultArea>
                {artist.images && artist.images.length > 0 ? (
                  <SearchArtistsCoverArea>
                    <SearchArtistsCover src={artist.images?.[0].url} />
                    <SearchArtistPlayButtonArea className="search-track-play-btn">
                      <PlayButton />
                    </SearchArtistPlayButtonArea>
                  </SearchArtistsCoverArea>
                ) : (
                  <SearchArtistsNoCoverArea>
                    <SearchArtistsNoCover viewBox="0 0 24 24">
                      <path d="M13.363 10.4742L12.842 11.0992C12.6086 11.379 12.4393 11.7065 12.3458 12.0587C12.2523 12.4109 12.2369 12.7793 12.3007 13.1381C12.3645 13.4968 12.506 13.8373 12.7153 14.1356C12.9245 14.434 13.1964 14.683 13.512 14.8652L13.797 15.0292C14.1345 14.4382 14.57 13.909 15.085 13.4642L14.512 13.1332C14.4489 13.0967 14.3945 13.0469 14.3527 12.9873C14.3109 12.9276 14.2826 12.8596 14.2698 12.7878C14.2571 12.7161 14.2601 12.6425 14.2788 12.572C14.2975 12.5016 14.3314 12.4362 14.378 12.3802L14.898 11.7562C15.9717 10.5455 16.6172 9.01512 16.735 7.40118C16.7841 6.56095 16.686 5.71858 16.445 4.91216C16.1971 4.15361 15.7913 3.45625 15.2542 2.86605C14.717 2.27585 14.0609 1.80623 13.329 1.48818C12.2258 1.00309 10.9984 0.875524 9.81909 1.12338C8.63974 1.37123 7.56757 1.98205 6.75299 2.87017C6.21741 3.46169 5.812 4.15906 5.56299 4.91717C5.32198 5.72359 5.22386 6.56595 5.27301 7.40618C5.3909 9.02058 6.03674 10.5513 7.11096 11.7622L7.62897 12.3842C7.6756 12.4401 7.70947 12.5056 7.72815 12.576C7.74683 12.6465 7.74989 12.7201 7.73712 12.7918C7.72436 12.8636 7.69606 12.9316 7.65424 12.9913C7.61241 13.0509 7.55808 13.1007 7.495 13.1372L3.5 15.4442C2.73992 15.883 2.10876 16.5142 1.66992 17.2743C1.23108 18.0343 1.00002 18.8965 1 19.7742V22.0052H14.54C14.0162 21.4229 13.6119 20.7433 13.35 20.0052H3V19.7742C2.99966 19.2472 3.13811 18.7295 3.40143 18.2731C3.66475 17.8167 4.04366 17.4377 4.5 17.1742L8.495 14.8672C8.81056 14.685 9.08246 14.436 9.29169 14.1376C9.50092 13.8393 9.64241 13.4988 9.70624 13.1401C9.77006 12.7813 9.75469 12.4129 9.66119 12.0607C9.5677 11.7085 9.39833 11.3811 9.16498 11.1012L8.64398 10.4762C8.03916 9.82817 7.61201 9.03491 7.40387 8.17327C7.19573 7.31163 7.21367 6.41081 7.45599 5.55816C7.61624 5.06462 7.8782 4.61019 8.22498 4.22418C8.57805 3.8391 9.00736 3.53165 9.4856 3.32131C9.96383 3.11098 10.4805 3.00234 11.003 3.00234C11.5254 3.00234 12.0422 3.11098 12.5204 3.32131C12.9986 3.53165 13.4279 3.8391 13.781 4.22418C14.1271 4.61049 14.3887 5.06485 14.549 5.55816C14.7059 6.11997 14.769 6.70382 14.736 7.28619C14.6432 8.47138 14.1604 9.59243 13.363 10.4742ZM21.004 9.30117C20.7388 9.30117 20.4844 9.40654 20.2969 9.59408C20.1093 9.78162 20.004 10.036 20.004 10.3012V14.9672H19.004C18.4106 14.9672 17.8306 15.1431 17.3373 15.4728C16.8439 15.8024 16.4594 16.2709 16.2324 16.8191C16.0053 17.3673 15.9459 17.9705 16.0616 18.5525C16.1774 19.1344 16.4631 19.6689 16.8827 20.0885C17.3022 20.5081 17.8368 20.7938 18.4187 20.9095C19.0006 21.0253 19.6039 20.9659 20.152 20.7388C20.7002 20.5118 21.1688 20.1272 21.4984 19.6339C21.8281 19.1405 22.004 18.5605 22.004 17.9672V10.3012C22.004 10.1696 21.9781 10.0393 21.9276 9.91781C21.8772 9.79629 21.8032 9.68591 21.71 9.59301C21.6168 9.50011 21.5063 9.42651 21.3846 9.37643C21.2629 9.32635 21.1326 9.30078 21.001 9.30117H21.004ZM20.004 17.9672C20.004 18.165 19.9453 18.3583 19.8354 18.5228C19.7256 18.6872 19.5694 18.8154 19.3867 18.891C19.2039 18.9667 19.0029 18.9865 18.8089 18.948C18.6149 18.9094 18.4367 18.8141 18.2969 18.6743C18.157 18.5344 18.0618 18.3562 18.0232 18.1623C17.9846 17.9683 18.0045 17.7672 18.0801 17.5845C18.1558 17.4018 18.284 17.2456 18.4484 17.1357C18.6129 17.0258 18.8062 16.9672 19.004 16.9672H20.004V17.9672Z"></path>
                    </SearchArtistsNoCover>
                    <SearchArtistPlayButtonArea className="search-track-play-btn">
                      <PlayButton />
                    </SearchArtistPlayButtonArea>
                  </SearchArtistsNoCoverArea>
                )}
                <SearchArtistTextInfo>
                  <SearchArtistName variant="h2" fontWeight={400}>
                    {artist.name}
                  </SearchArtistName>
                  <Typography variant="body1" color="#b3b3b3">
                    아티스트
                  </Typography>
                </SearchArtistTextInfo>
              </SearchArtistsResultArea>
            </Grid>
          );
        })}
      </Grid>
    </SearchArtistsContainer>
  );
};

export default SearchWithKeywordArtist;
