import React, { useEffect } from "react";
import useGetPlaylist from "../../hooks/useGetPlaylist";
import { Navigate, useParams } from "react-router";
import { styled } from "@mui/system";
import useGetPlaylistItems from "../../hooks/useGetPlaylistItems";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import PlaylistDetailHeader from "./components/PlaylistDetailHeader";
import DesktopPlaylistItem from "./components/DesktopPlaylistItem";
import { PAGE_LIMIT } from "../../configs/commonConfig";
import { useInView } from "react-intersection-observer";
import Loading from "../../common/components/Loading";
import MobilePlaylistItems from "./components/MobilePlaylistItems";
import useGetCurrentUserProfile from "../../hooks/useGetCurrentUserProfile";
import GoToLogin from "../../common/components/GoToLogin";
import EmptyPlaylistWithSearch from "./components/EmptyPlaylistWithSearch";

const PlaylistDetailContainer = styled("div")(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  borderRadius: "8px",
  backgroundColor: "#121212",
  overflowY: "auto",
  overflowX: "hidden",
  zIndex: "5",

  [theme.breakpoints.down("xl")]: {
    paddingBottom: "70px",
    borderRadius: "0px",
  },

  "&::-webkit-scrollbar": {
    display: "none",
  },
  scrollbarWidth: "none",
  msOverflowStyle: "none",
}));

const PlaylistDetailLogin = styled("div")({
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#121212",
});

const PlaylistDetailTableArea = styled("div")(({ theme }) => ({
  background: "#12121233",
  zIndex: 2,
  padding: "0px 24px",
  [theme.breakpoints.down("xl")]: {
    background:
      "linear-gradient(to bottom, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 1) 10%)",
    padding: "0px 4px",
  },
}));

const EmptySpace = styled("div")(({ theme }) => ({
  height: "16px",
  [theme.breakpoints.down("xl")]: {
    display: "none",
  },
}));

const StyledTable = styled(Table)({});
const StyledTableHead = styled(TableHead)(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    display: "none",
  },
}));

const StyledHeaderCell = styled(TableCell)({
  height: "36px",
  padding: "0px 16px",
  marginBottom: "16px",
  color: "#b3b3b3",
  borderBottom: "1px solid #ffffff33",
});

const PlaylistDetailPlayTimeIcon = styled("svg")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "16px",
  height: "16px",
  fill: "#b3b3b3",
});

const PlaylistDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { ref, inView } = useInView();
  const { data: user } = useGetCurrentUserProfile();

  const { data: playlist } = useGetPlaylist({ playlist_id: id || "" });
  const {
    data: playlistItems,
    isLoading: isPlaylistItemsLoading,
    error: playlistItemsError,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetPlaylistItems({ playlist_id: id || "", limit: PAGE_LIMIT });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  // console.log("user", user);
  // console.log("pp", playlist);
  // console.log("pi", playlistItems);

  if (id === undefined) return <Navigate to="/" />;
  if (!user && !playlist) {
    return (
      <PlaylistDetailLogin>
        <GoToLogin />
      </PlaylistDetailLogin>
    );
  }

  if (isPlaylistItemsLoading) {
    return <Loading />;
  }

  return (
    <PlaylistDetailContainer>
      <PlaylistDetailHeader
        name={playlist?.name}
        image={playlist?.images?.[0].url}
        owner={playlist?.owner?.display_name}
        follower={playlist?.followers.total}
        total={playlist?.tracks?.total}
        f_image={
          playlistItems?.pages[0]?.items[0]?.track?.album?.images?.[0]?.url
        }
      />
      {playlist?.tracks?.total === 0 ? (
        <Typography>
          <EmptyPlaylistWithSearch />
        </Typography>
      ) : (
        <PlaylistDetailTableArea>
          <StyledTable>
            <StyledTableHead>
              <TableRow>
                <StyledHeaderCell>#</StyledHeaderCell>
                <StyledHeaderCell>제목</StyledHeaderCell>
                <StyledHeaderCell>앨범</StyledHeaderCell>
                <StyledHeaderCell>추가한 날짜</StyledHeaderCell>
                <StyledHeaderCell>
                  <PlaylistDetailPlayTimeIcon
                    role="img"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                    <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
                  </PlaylistDetailPlayTimeIcon>
                </StyledHeaderCell>
              </TableRow>
            </StyledTableHead>
            <EmptySpace></EmptySpace>
            <TableBody>
              {playlistItems?.pages.map((page, pageIndex) =>
                page.items.map((item, itemIndex) => {
                  return (
                    <>
                      <DesktopPlaylistItem
                        item={item}
                        key={pageIndex * PAGE_LIMIT + itemIndex + 1}
                        index={pageIndex * PAGE_LIMIT + itemIndex + 1}
                      />
                      <MobilePlaylistItems
                        item={item}
                        index={pageIndex * PAGE_LIMIT + itemIndex + 1}
                      />
                    </>
                  );
                })
              )}
            </TableBody>
          </StyledTable>
        </PlaylistDetailTableArea>
      )}
      <div ref={ref}>{isFetchingNextPage && <Loading />}</div>
    </PlaylistDetailContainer>
  );
};

export default PlaylistDetailPage;
