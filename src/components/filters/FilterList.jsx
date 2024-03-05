import Stack from "@mui/material/Stack";
import classes from "./FilterList.module.css";
import CancelIcon from "@mui/icons-material/Cancel";

const FilterList = (props) => {
  const {
    categories,
    selectedCategory,
    loading,
    disableUserActions,
    dispatch,
  } = props;

  const categoryList = categories.map((cat) => {
    const activeCategory = cat.category_slug === selectedCategory;
    const categoryAction = {
      type: "FILTER_PRODUCTS",
      selectedCategory: cat.category_slug,
    };

    return (
      <li key={cat.category_slug}>
        <button
          className="btn light-bg"
          onClick={() => dispatch(categoryAction)}
          disabled={loading || disableUserActions}
        >
          {cat.category_name_ar}
          {activeCategory && <CancelIcon fontSize="small" />}
        </button>
      </li>
    );
  });

  return (
    <Stack component="ul" direction="row" className={classes["filter-list"]}>
      {categoryList}
    </Stack>
  );
};

export default FilterList;
