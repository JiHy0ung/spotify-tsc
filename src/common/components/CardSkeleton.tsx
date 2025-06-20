import { Box, Skeleton } from "@mui/material";
import React from "react";

const CardSkeleton = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={"8px"}>
      <Skeleton variant="rounded" width={"171px"} height={"171px"} />
      <Box>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} width={"171px"} />
        <Skeleton variant="text" sx={{ fontSize: "14px" }} width={"171px"} />
      </Box>
    </Box>
  );
};

export default CardSkeleton;
