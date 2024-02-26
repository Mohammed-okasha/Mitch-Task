import { useProducts } from "../../context/providers/ProductsProvider";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  const { dispatch, searchQuery } = useProducts();

  const searchingHandler = (e) => {
    dispatch({ type: "SEARCH_PRODUCTS", query: e.target.value });
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      className={classes["search-bar"]}
    >
      <span className={classes.icon}>
        <SearchIcon />
      </span>
      <input
        type="text"
        name="search-query"
        placeholder="أبحث هنا"
        value={searchQuery}
        className={classes["search-input"]}
        onChange={searchingHandler}
      />
    </Stack>
  );
};

export default SearchBar;
