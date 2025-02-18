import { Toolbar, AppBar, Typography } from "@mui/material";
import { JSX } from "react";

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    // FIXME: Make it so that it's not always shown
    <AppBar
      position={"fixed"}
      sx={{ top: "auto", bottom: 0, p: 1 }}
      color="success"
    >
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="subtitle1">
          Local Courier © {currentYear}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
