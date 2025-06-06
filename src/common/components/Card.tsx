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
  width: "195.5px",
  maxHeight: "292.56px",
  padding: "12px",
  borderRadius: "6px",
  cursor: "pointer",
  "&:hover": {
    transform: "translate3d(0px, 0px, 0px)",
    backgroundColor: "#1f1f1f",
  },
  "&:hover .albumPlayButton": {
    bottom: "8px",
    opacity: "1",
  },

  [theme.breakpoints.down("xl")]: {
    padding: "16px",
  },
}));

const AlbumCoverContainer = styled("div")(({ theme }) => ({
  position: "relative",
  height: "171.5px",
  width: "171.5px",
  [theme.breakpoints.down("xl")]: {
    height: "152px",
    width: "152px",
  },
}));

const AlbumCoverImage = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "8px",
});

const AlbumInfoArea = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

const AlbumPlayButton = styled("div")({
  right: "8px",
  bottom: "0px",
  opacity: "0",
  position: "absolute",
  transform: "translate3d(0px, 0px, 0px)",
  transition: "all 0.2s ease-in-out",
});

const Card = ({ image, name, artistName }: CardProps) => {
  return (
    <CardContainer>
      <AlbumCoverContainer>
        <AlbumCoverImage src={image} alt={name} />
        <AlbumPlayButton className="albumPlayButton">
          <PlayButton />
        </AlbumPlayButton>
      </AlbumCoverContainer>
      <AlbumInfoArea>
        <Typography
          variant="h2"
          sx={{
            width: {
              md: "152px",
            },
          }}
        >
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
      </AlbumInfoArea>
    </CardContainer>
  );
};

export default Card;
