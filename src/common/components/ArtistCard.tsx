import React from "react";
import { styled, Typography } from "@mui/material";
import PlayButton from "./PlayButton";

interface CardProps {
  image: string;
  name: string;
  artistName: string | undefined;
}

const CardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  height: "fit-content",
  width: "fit-content",
  maxHeight: "292.56px",
  padding: "12px",
  borderRadius: "6px",
  cursor: "pointer",
  "&:hover": {
    transform: "translate3d(0px, 0px, 0px)",
    backgroundColor: "#1f1f1f",
  },
  "&:hover .artistPlayButton": {
    bottom: "8px",
    opacity: "1",
  },

  [theme.breakpoints.down("xl")]: {
    padding: "8px",
  },
}));

const ArtistCoverContainer = styled("div")(({ theme }) => ({
  position: "relative",
  height: "171.5px",
  width: "171.5px",
  [theme.breakpoints.down("xl")]: {
    height: "152px",
    width: "152px",
  },
}));

const ArtistCoverImage = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "50%",
});

const ArtistInfoArea = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

const ArtistPlayButton = styled("div")(({ theme }) => ({
  right: "8px",
  bottom: "0px",
  opacity: "0",
  position: "absolute",
  transform: "translate3d(0px, 0px, 0px)",
  transition: "all 0.2s ease-in-out",
  [theme.breakpoints.down("xl")]: {
    display: "none",
  },
}));

const ArtistCard = ({ image, name, artistName }: CardProps) => {
  return (
    <CardContainer>
      <ArtistCoverContainer>
        <ArtistCoverImage src={image} alt={name} />
        <ArtistPlayButton className="artistPlayButton">
          <PlayButton />
        </ArtistPlayButton>
      </ArtistCoverContainer>
      <ArtistInfoArea>
        <Typography variant="h2" fontWeight={400}>
          {name}
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{
            display: {
              xs: "none",
              md: "none",
              lg: "none",
              xl: "block",
            },
          }}
        >
          {artistName || "No Name"}
        </Typography>
      </ArtistInfoArea>
    </CardContainer>
  );
};

export default ArtistCard;
