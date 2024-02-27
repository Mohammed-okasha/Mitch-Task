// initial products per page
const PRODUCTS_PER_PAGE = 12;

const productsReducer = (state, action) => {
  switch (action.type) {
    case "LOADED_PRODUCTS":
      return { ...state, products: action.payload };

    case "SEARCH_PRODUCTS":
      return {
        ...state,
        searchQuery: action.query,
      };

    case "FILTER_PRODUCTS":
      return {
        ...state,
        // Reset products_per_page
        products_per_page: PRODUCTS_PER_PAGE,
        category: action.selectedCategory,
        searchQuery: "",
      };

    case "LOAD_MORE_PRODUCTS":
      return {
        ...state,
        products: state.products.concat(action.payload),
        products_per_page: state.products_per_page + PRODUCTS_PER_PAGE,
        searchQuery: "",
      };

    default:
      throw new Error("unknown action type!");
  }
};

export default productsReducer;
