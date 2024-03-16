import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar({ isOpen, onToggle }) {
  const handleClick = (e) => {
    e.stopPropagation(); // Prevent the click event from bubbling up to the document
    if (!isOpen) {
      onToggle(); // Toggle the search bar open state if it's closed
    }
  };

  return (
    <Paper
      component="form"
      className={`outer-s ${isOpen ? "search-open" : ""}`}
      onClick={handleClick}
    >
      <InputBase
        className="inner-s"
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton className="search-bar-btn" type="button" aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
