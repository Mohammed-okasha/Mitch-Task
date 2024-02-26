import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ProductContent = ({ name, price, salePrice }) => {
  let productPrice = parseFloat(price).toFixed(2);
  let priceBeforeSale = null;

  if (salePrice) {
    productPrice = parseFloat(productPrice - salePrice).toFixed(2);
    priceBeforeSale = (
      <Typography component="span" className="old-price">
        EGP {price}
      </Typography>
    );
  }

  return (
    <CardContent>
      <Typography component="div" pb={1}>
        {name}
      </Typography>

      <Typography variant="body1">
        {priceBeforeSale}
        <Typography component="span">EGP {productPrice}</Typography>
      </Typography>
    </CardContent>
  );
};

export default ProductContent;
