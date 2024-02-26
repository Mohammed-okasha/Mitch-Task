import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ProductItem from "../productItem/ProductItem";

const ProductList = ({ products }) => {
  const noProductsFound = products.length === 0;

  if (noProductsFound) {
    return (
      <Typography variant="h6" textAlign="center">
        لم يتم العثور على منتجات !
      </Typography>
    );
  }

  return (
    <Box>
      <Grid container spacing={2} component="ul">
        {products.map((product) => (
          <Grid key={product.id} item xs={6} md={4} lg={3} component="li">
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
