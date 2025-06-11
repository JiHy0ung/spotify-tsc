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
import { InView, useInView } from "react-intersection-observer";
import Loading from "../../common/components/Loading";

const PlaylistDetailContainer = styled("div")({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  padding: "16px",
  borderRadius: "8px",
  backgroundColor: "#121212",
});

const PlaylistDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { ref, inView } = useInView();

  const { data: playlist } = useGetPlaylist({ playlist_id: id || "" });
  const {
    data: playlistItems,
    isLoading: isPlaylistItemsLoading,
    error: playlistItemsLoading,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetPlaylistItems({ playlist_id: id || "", limit: PAGE_LIMIT });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  console.log("pp", playlist);
  console.log("pi", playlistItems);

  if (id === undefined) return <Navigate to="/" />;

  return (
    <PlaylistDetailContainer>
      <PlaylistDetailHeader
        name={playlist?.name}
        image={playlist?.images?.[0].url}
        owner={playlist?.owner?.display_name}
        follower={playlist?.followers.total}
        total={playlist?.tracks?.total}
      />
      {playlist?.tracks?.total === 0 ? (
        <Typography>Search</Typography>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>제목</TableCell>
              <TableCell>앨범</TableCell>
              <TableCell>추가한 날짜</TableCell>
              <TableCell>재생 시간(아이콘)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {playlistItems?.pages.map((page, pageIndex) =>
              page.items.map((item, itemIndex) => {
                return (
                  <DesktopPlaylistItem
                    item={item}
                    key={pageIndex * PAGE_LIMIT + itemIndex + 1}
                    index={pageIndex * PAGE_LIMIT + itemIndex + 1}
                  />
                );
              })
            )}
          </TableBody>
        </Table>
      )}
      <div ref={ref}>{isFetchingNextPage && <Loading />}</div>
    </PlaylistDetailContainer>
  );
};

export default PlaylistDetailPage;
