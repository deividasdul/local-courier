import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Box,
} from "@mui/material";
import { Login as LoginIcon, LockReset } from "@mui/icons-material";
import StyledButton from "../components/StyledButton";
import { JSX } from "react";

const Login = (): JSX.Element => {
  return (
    <Box height={"90vh"} display={"flex"} alignItems={"center"}>
      <Container maxWidth={"lg"}>
        <Paper sx={{ p: 4 }} elevation={12}>
          <Stack gap={2}>
            <Typography align="center" variant="h2" gutterBottom>
              Login
            </Typography>
            <TextField required label="Email" type="email" />
            <TextField required label="Password" type="password" />
            <StyledButton
              endIcon={<LoginIcon />}
              label={"Login"}
              color={"success"}
            />
            <Button
              endIcon={<LockReset />}
              variant="contained"
              color="warning"
              sx={{ p: 2 }}
            >
              Forgot Password
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
