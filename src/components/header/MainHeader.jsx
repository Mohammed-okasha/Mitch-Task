import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import SearchBar from "./SearchBar";
import CartButton from "./CartButton";

const MainHeader = () => {
  return (
    <Box component="header" py={2}>
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <SearchBar />
          <CartButton />
        </Stack>
      </Container>
    </Box>
  );
};

export default MainHeader;
