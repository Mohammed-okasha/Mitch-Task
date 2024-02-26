import React, { useReducer, useContext, useCallback } from "react";
import useFetch from "../../hooks/useFetch";
import productsReducer from "../reducers/products-reducer";
import { generateCategories } from "../../utils/helpers";

const initialProductsState = {
  products: [],
  category: "",
  searchQuery: "",
  products_per_page: 12,
};

const ProductsContext = React.createContext({
  products: [],
  category: "",
  searchQuery: "",
  products_per_page: 12,
  categories: [],
  currentProductsCount: 0,
  disableUserActions: false,
  isLoading: false,
  error: null,
  dispatch: function () {},
});
//====================================================================
const ProductsProvider = ({ children }) => {
  const [{ products, category, searchQuery, products_per_page }, dispatch] =
    useReducer(productsReducer, initialProductsState);

  // This Hook Will Fetch Products Each Time the category states updated.
  const { isLoading, error } = useFetch(
    category,
    useCallback((result) => {
      dispatch({ type: "LOADED_PRODUCTS", payload: result });
    }, [])
  );

  let filteredProducts = products;

  // search for products only on client side, because keyword endpoint not working
  if (searchQuery.trim().toLowerCase().length > 0) {
    filteredProducts = products.filter((product) =>
      product.ar_name.includes(searchQuery)
    );
  }

  const productsCtx = {
    products: filteredProducts,
    category,
    searchQuery,
    products_per_page,
    categories: generateCategories(products),
    currentProductsCount: filteredProducts.length,
    disableUserActions: filteredProducts.length === 0,
    isLoading,
    error,
    dispatch,
  };

  return (
    <ProductsContext.Provider value={productsCtx}>
      {children}
    </ProductsContext.Provider>
  );
};

const useProducts = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("useProducts hook is used outside of the ProductsProvider");
  }

  return context;
};

export { ProductsProvider, useProducts };
