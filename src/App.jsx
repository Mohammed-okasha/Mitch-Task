import ThemeProvider from "./theme/ThemeProvider";
import { ProductsProvider } from "./context/providers/ProductsProvider";
import { CartProvider } from "./context/providers/CartProvider";
import MainHeader from "./components/header/MainHeader";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "./components/Breadcrumbs";
import ProductsController from "./components/products/ProductsController";

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <ProductsProvider>
          <MainHeader />
          <main id="app">
            <Container maxWidth="lg">
              <Breadcrumbs />
              <Typography variant="h4" component="h2" mb={2}>
                جميع المنتجات
              </Typography>
              <ProductsController />
            </Container>
          </main>
        </ProductsProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
