import React from "react";
import { styled, Tooltip, tooltipClasses, Typography } from "@mui/material";
import "../styles/AppLayout.style.css";
import useCreatePlaylist from "../../hooks/useCreatePlaylist";
import useGetCurrentUserProfile from "../../hooks/useGetCurrentUserProfile";
import { getSpotifyAuthUrl } from "../../utils/auth";
import { TooltipProps } from "react-bootstrap";

const ContentBoxHeader = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "12px 16px 8px",
  marginBottom: "16px",
  color: theme.palette.text.primary,
}));

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#1f1f1f",
    fontSize: "14px",
  },
});

const LibraryHead = () => {
  const { data: user } = useGetCurrentUserProfile();

  const { mutate: createPlaylist } = useCreatePlaylist();

  const handleCreatePlaylist = () => {
    if (!user) {
      getSpotifyAuthUrl();
    }
    createPlaylist({ name: "나의 플레이리스트" });
  };

  return (
    <ContentBoxHeader>
      <Typography
        variant="h2"
        fontWeight={700}
        marginLeft={"4px"}
        sx={{ cursor: "default", letterSpacing: "-0.5px" }}
      >
        내 라이브러리
      </Typography>
      <button
        className="layout-sidebar-library-btn"
        onClick={handleCreatePlaylist}
      >
        <CustomTooltip title="플레이리스트 또는 폴더 만들기" placement="top">
          <svg
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="layout-sidebar-library-add"
          >
            <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
          </svg>
        </CustomTooltip>
      </button>
    </ContentBoxHeader>
  );
};

export default LibraryHead;
