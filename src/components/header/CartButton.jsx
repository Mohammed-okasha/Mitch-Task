import { useCart } from "../../context/providers/CartProvider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Typography from "@mui/material/Typography";

const CartButton = () => {
  const { totalItems, totalAmount } = useCart();

  return (
    <>
      <IconButton sx={{ color: "primary.main" }}>
        <Badge
          badgeContent={totalItems || "0"}
          color="secondary"
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <ShoppingBasketIcon />
        </Badge>
      </IconButton>
      <Typography variant="body2">EGP {totalAmount}</Typography>
    </>
  );
};

export default CartButton;
