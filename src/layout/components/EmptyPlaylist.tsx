import React from "react";
import { styled, Typography } from "@mui/material";
import "../styles/AppLayout.style.css";

const EmptyPlaylist = () => {
  const EmptyLibrary = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "8px",
    padding: "8px",
  });

  const EmptyLibraryContent = styled("div")({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "left",
    height: "133px",
    gap: "16px",
    borderRadius: "8px",
    padding: "16px 20px",
    marginBlock: "8px",
    backgroundColor: "#1f1f1f",
  });

  return (
    <EmptyLibrary>
      <EmptyLibraryContent>
        <div className="layout-empty-library-text">
          <Typography
            variant="h2"
            fontWeight={700}
            letterSpacing="-0.5px"
            sx={{ cursor: "default" }}
          >
            첫 번째 플레이리스트를 만드세요.
          </Typography>
          <Typography
            variant="body1"
            fontWeight={400}
            letterSpacing="-0.5px"
            sx={{ cursor: "default" }}
          >
            어렵지 않아요. 저희가 도와드릴게요.
          </Typography>
        </div>
        <button className="layout-empty-library-btn">
          플레이리스트 만들기
        </button>
      </EmptyLibraryContent>
      <EmptyLibraryContent>
        <div className="layout-empty-library-text">
          <Typography
            variant="h2"
            fontWeight={700}
            letterSpacing="-0.5px"
            sx={{ cursor: "default" }}
          >
            팔로우할 팟캐스트를 찾아보세요.
          </Typography>
          <Typography
            variant="body1"
            fontWeight={400}
            letterSpacing="-0.5px"
            sx={{ cursor: "default" }}
          >
            새로운 에피소드에 대한 소식을 알려드릴게요.
          </Typography>
        </div>
        <button className="layout-empty-library-btn">팟캐스트 둘러보기</button>
      </EmptyLibraryContent>
    </EmptyLibrary>
  );
};

export default EmptyPlaylist;
