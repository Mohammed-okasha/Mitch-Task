import { useProducts } from "../../context/providers/ProductsProvider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FilterList from "../filters/FilterList";
import ProductList from "./ProductList";
import Loading from "../ui/Loading";
import LoadMoreButton from "./LoadMoreButton";

const ProductsController = () => {
  const {
    isLoading,
    error,
    products,
    categories,
    category,
    disableUserActions,
    dispatch,
  } = useProducts();

  if (error) return <Typography textAlign="center">{error}</Typography>;

  return (
    <Box pb={5}>
      <FilterList
        categories={categories}
        selectedCategory={category}
        loading={isLoading}
        disableUserActions={disableUserActions}
        dispatch={dispatch}
      />
      {!isLoading && <ProductList products={products} />}
      {isLoading && <Loading />}
      <LoadMoreButton />
    </Box>
  );
};

export default ProductsController;
