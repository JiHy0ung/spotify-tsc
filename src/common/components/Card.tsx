import React from "react";
import { styled, Typography } from "@mui/material";
import PlayButton from "./PlayButton";

interface CardProps {
  image: string;
  name: string;
  artistName: string | undefined;
}

const CardContainer = styled("div")({
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
});

const AlbumCoverContainer = styled("div")({
  position: "relative",
  height: "171.5px",
  width: "171.5px",
});

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
        <Typography variant="h2">{name}</Typography>
        <Typography variant="body1" color="textSecondary">
          {artistName || "No Name"}
        </Typography>
      </AlbumInfoArea>
    </CardContainer>
  );
};

export default Card;
