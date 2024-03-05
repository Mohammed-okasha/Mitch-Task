import { useProducts } from "../../context/providers/ProductsProvider";
import { useHttp } from "../../hooks/useHttp";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Spinner from "../ui/Spinner";
import Typography from "@mui/material/Typography";

const NUM_OF_LOADING = 12;

const LoadMoreButton = () => {
  const {
    category,
    searchQuery,
    products_per_page,
    isLoading,
    currentProductsCount,
    disableUserActions,

    dispatch,
  } = useProducts();
  const { isLoading: isLoadMore, error, performRequest } = useHttp();
  const [canLoadMore, setCanLoadMore] = useState(true);

  const loadMoreHandler = () => {
    const payload = {
      category,
      products_per_page: products_per_page + NUM_OF_LOADING,
    };

    performRequest({ body: payload }, (result) => {
      const loadedProductsCount = result.length;

      // if this true => prevent user from load more products
      if (loadedProductsCount === currentProductsCount) {
        setCanLoadMore(false);
        return;
      }

      // if this true => this will load remaining products then close load more button
      if (loadedProductsCount % NUM_OF_LOADING > 0) {
        dispatch({
          type: "LOAD_MORE_PRODUCTS",
          payload: result.slice(NUM_OF_LOADING),
        });

        setCanLoadMore(false);
      } else {
        // in this case There are more products, so user can load more
        dispatch({
          type: "LOAD_MORE_PRODUCTS",
          payload: result.slice(products_per_page),
        });
      }
    });
  };

  useEffect(() => {
    // waiting until data is received from the database
    if (currentProductsCount === 0) return;

    /*
    - if initially this is true => close load more button in advance
    - searchQuery need to be empty otherwise load more button will be disabled,
    because searching products only on client side
  */
    if (currentProductsCount < NUM_OF_LOADING && searchQuery === "") {
      setCanLoadMore(false);
    } else {
      setCanLoadMore(true);
    }
  }, [currentProductsCount, searchQuery]);

  // require to disable load more button in this cases
  const requireToDisable =
    isLoadMore || isLoading || !canLoadMore || disableUserActions;

  return (
    <Box textAlign="center" mt={5}>
      <button
        className="btn outlined-btn load-more"
        aria-roledescription="load-products"
        disabled={requireToDisable}
        onClick={loadMoreHandler}
      >
        {!isLoadMore ? "عرض المزيد" : <Spinner />}
      </button>
      {!canLoadMore && (
        <Typography variant="h6" pt={1}>
          لايوجد المزيد من المنتجات...
        </Typography>
      )}
      {error && <Typography variant="h6">{error}</Typography>}
    </Box>
  );
};

export default LoadMoreButton;
