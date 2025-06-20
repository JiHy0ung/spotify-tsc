import React, { useEffect } from "react";
import EmptyPlaylist from "./EmptyPlaylist";
import useGetCurrentUserPlaylists from "../../hooks/useGetCurrentUserPlaylists";
import Playlist from "./Playlist";
import useGetCurrentUserProfile from "../../hooks/useGetCurrentUserProfile";
import { useInView } from "react-intersection-observer";
import Loading from "../../common/components/Loading";
import { Box, styled } from "@mui/material";
import PlaylistSkeleton from "./PlaylistSkeleton";

const EmptyTabArea = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("xl")]: {
    height: "70px",
  },
}));

const Library = () => {
  const { ref, inView } = useInView(); // 무한 스크롤 라이브러리

  const {
    data: userPlaylists,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
    isLoading,
  } = useGetCurrentUserPlaylists({
    limit: 10,
    offset: 0,
  }); // 0번째 데이터 부터 10개 까지

  const { data: user } = useGetCurrentUserProfile();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage(); // 자동으로 offset을 바꿔줌.
    }
  }, [inView, fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (!user) return <EmptyPlaylist />;

  return (
    <>
      {isLoading ? (
        <Box display={"flex"} flexDirection={"column"} gap={"16px"}>
          {Array.from({ length: 20 }).map((_) => (
            <PlaylistSkeleton />
          ))}
        </Box>
      ) : !userPlaylists || userPlaylists?.pages[0].total === 0 ? (
        <EmptyPlaylist />
      ) : (
        <>
          {userPlaylists.pages.map((page, index) => (
            <Playlist playlists={page.items} key={index} />
          ))}
          <div ref={ref}>{isFetchingNextPage && <Loading />}</div>
          <EmptyTabArea />
        </>
      )}
    </>
  );
};

export default Library;
