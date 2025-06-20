import { Box, Skeleton } from "@mui/material";
import React from "react";

const PlaylistSkeleton = () => {
  return (
    <Box display={"flex"} gap={"8px"} paddingInline={"8px"}>
      <Skeleton variant="rounded" width={"48px"} height={"48px"} />
      <Box display={"flex"} flexDirection={"column"}>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={"144px"} />
        <Skeleton variant="text" sx={{ fontSize: "14px" }} width={"164px"} />
      </Box>
    </Box>
  );
};

export default PlaylistSkeleton;
