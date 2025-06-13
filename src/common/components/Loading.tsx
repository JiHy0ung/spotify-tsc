import { CircularProgress, styled } from "@mui/material";

const LoadingContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Loading = () => {
  return (
    <LoadingContainer>
      <CircularProgress sx={{ fill: "#1ed760" }} />
    </LoadingContainer>
  );
};

export default Loading;
