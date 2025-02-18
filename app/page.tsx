import { Container, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export default function Home() {
  return (
    <Container maxWidth={"xl"} sx={{ p: 2, bgcolor: "#E6E6E6" }}>
      <Typography variant="h1" align="center" gutterBottom>
        Fast & Reliable Local Courier Service
      </Typography>
      <Box display={"flex"} justifyContent={"center"} m={2}>
        <Button
          endIcon={<ShoppingBasketIcon />}
          variant="contained"
          color="success"
          sx={{ p: 2 }}
        >
          <Link href={"/browse"}>Start Shopping</Link>
        </Button>
      </Box>
    </Container>
  );
}
