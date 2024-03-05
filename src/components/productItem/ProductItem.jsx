import { useCart } from "../../context/providers/CartProvider";
import Card from "@mui/material/Card";
import ProductContent from "./ProductContent";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import ZoomIcon from "../ui/ZoomIcon";
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
      <Box className="card-header">
        <img src={imageSrc} alt={ar_name} />
        <button className="outlined-btn circle zoom-btn">
          <ZoomIcon />
        </button>
      </Box>
      <ProductContent name={ar_name} price={price} salePrice={sale_price} />

      <CardActions sx={{ gap: 1 }}>
        <Button
          variant="contained"
          fullWidth
          sx={{ justifyContent: "flex-start", py: 1 }}
          onClick={addToCartHandler}
          disabled={!isAvailable}
        >
          {isAvailable ? "إضافة للسلة" : "نفذت الكمية"}
        </Button>
        <IconButton>
          <FavoriteIcon fontSize="small" sx={{ fill: "#163300" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
