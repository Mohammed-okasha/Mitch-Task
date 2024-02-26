import { useCart } from "../../context/providers/CartProvider";
import Card from "@mui/material/Card";
import ProductContent from "./ProductContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import { notification } from "../../utils/helpers";

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();
  const { main_image, ar_name, price, sale_price, availability } = product;

  const isAvailable = availability === "instock";
  const imageSrc = main_image || "./placeholder.jpg";

  const addToCartHandler = () => {
    addToCart(product);
    notification("success", "تم تحديث عربة التسوق");
  };

  return (
    <Card>
      <Box>
        <img src={imageSrc} alt={ar_name} />
      </Box>

      <ProductContent name={ar_name} price={price} salePrice={sale_price} />

      <CardActions>
        <Button
          variant="contained"
          fullWidth
          onClick={addToCartHandler}
          disabled={!isAvailable}
        >
          {isAvailable ? "أضف الى السلة" : "نفذت الكمية"}
        </Button>
        <IconButton sx={{ ml: "0 !important" }}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
