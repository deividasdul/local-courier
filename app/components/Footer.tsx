import { Toolbar, AppBar, Typography } from "@mui/material";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
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
