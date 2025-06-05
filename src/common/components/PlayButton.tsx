import { styled } from "@mui/material";
import React from "react";

const PlayButtonContainer = styled("div")(({ theme }) => ({
  height: "48px",
  width: "48px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "30px",
  cursor: "pointer",
  backgroundColor: theme.palette.primary.main,
  boxShadow: "0 8px 8px rgba(0, 0, 0, 0.3)",
  "&:hover": {
    backgroundColor: "#3be477",
    transform: "scale(1.05)",
  },
}));

const PlayButton = () => {
  return (
    <PlayButtonContainer>
      <svg viewBox="0 0 24 24" width={"24px"}>
        <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
      </svg>
    </PlayButtonContainer>
  );
};

export default PlayButton;
