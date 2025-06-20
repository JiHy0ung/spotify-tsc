import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

const CategorySkeleton = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Skeleton
        variant="text"
        sx={{
          fontSize: { xl: "24px", lg: "1rem", xs: "1rem" },
          margin: {
            xl: "56px 12px 12px 12px",
            lg: "20px 0px 32px 0px",
            xs: "20px 0px 32px 0px",
          },
          alignSelf: "flex-start",
        }}
        width={"90px"}
      />
      <Grid
        width={"100%"}
        container
        spacing={{ xs: 2, xl: 3 }}
        paddingInline={{ xl: "12px", lg: "0px", xs: "0px" }}
      >
        {Array.from({ length: 20 }).map((_) => (
          <Grid size={{ xs: 6, lg: 6, xl: 3 }}>
            <Skeleton
              variant="rounded"
              width={"100%"}
              sx={{
                height: { xl: "200px", lg: "100px", xs: "100px" },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategorySkeleton;
