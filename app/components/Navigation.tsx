"use client";

import { Toolbar, AppBar, createTheme } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  ContactPage,
  Work,
  Login,
  AccountCircle,
  Store,
  HomeOutlined,
  ContactPageOutlined,
  WorkOutlineOutlined,
  LoginOutlined,
  AccountCircleOutlined,
  StoreOutlined,
} from "@mui/icons-material";
import { JSX } from "react";

const Navigation = (): JSX.Element => {
  const pathName = usePathname();
  const theme = createTheme();

  const links = [
    {
      label: "Home",
      icon: <Home />,
      outlinedIcon: <HomeOutlined />,
      href: "/",
    },
    {
      label: "Browse",
      icon: <Store />,
      outlinedIcon: <StoreOutlined />,
      href: "/browse",
    },
    {
      label: "Contact",
      icon: <ContactPage />,
      outlinedIcon: <ContactPageOutlined />,
      href: "/contact",
    },
    {
      label: "Career",
      icon: <Work />,
      outlinedIcon: <WorkOutlineOutlined />,
      href: "/career",
    },
    {
      label: "Login",
      icon: <Login />,
      outlinedIcon: <LoginOutlined />,
      href: "/login",
    },
    {
      label: "Register",
      icon: <AccountCircle />,
      outlinedIcon: <AccountCircleOutlined />,
      href: "/register",
    },
  ];

  const isCurrentPath = (path: string): boolean => {
    if (pathName !== path) {
      return false;
    }
    return true;
  };

  return (
    <AppBar position="relative" color="success" sx={{ p: 2 }}>
      <Toolbar sx={{ justifyContent: "flex-end", gap: 2 }}>
        {links.map((link, index) => {
          return (
            <Link
              key={index}
              style={{
                display: "flex",
                gap: theme.spacing(0.5),
                // FIXME: Don't repeat yourself
                // TODO: Add specific style
                fontWeight: isCurrentPath(link.href) ? 900 : "normal",
                textDecoration: isCurrentPath(link.href) ? "underline" : "none",
              }}
              href={link.href}
            >
              {link.label}
              {isCurrentPath(link.href) ? link.icon : link.outlinedIcon}
            </Link>
          );
        })}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
