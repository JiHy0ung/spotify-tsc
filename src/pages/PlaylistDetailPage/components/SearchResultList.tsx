import React from "react";
import { Track } from "../../../models/track";
import { Typography } from "@mui/material";

interface SearchResultListProps {
  list: Track[];
}

const SearchResultList = ({ list }: SearchResultListProps) => {
  return (
    <div>
      {list.map((track) => (
        <Typography>{track.name}</Typography>
      ))}
    </div>
  );
};

export default SearchResultList;
