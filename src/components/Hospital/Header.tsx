"use client";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import React from "react";

export default function Header({
  navLinks,
  onNavClick,
}: {
  navLinks: { label: string; active?: boolean }[];
  onNavClick: (label: string) => void;
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={2}
      sx={{
        borderRadius: 3,
        mt: 2,
        mx: "auto",
        maxWidth: 1300,
        bgcolor: "#fff",
        boxShadow: "0 2px 12px 0 rgba(25, 118, 210, 0.08)",
        top: 0,
        zIndex: 1100,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          minHeight: { xs: 56, sm: 64 },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mr: 3 }}>
          {/* <Image src="/logo.svg" alt="Unity Hospital Purnea Logo" width={isMobile ? 32 : 40} height={isMobile ? 32 : 40} style={{ marginRight: isMobile ? 8 : 12 }} /> */}
          <Typography
            variant={isMobile ? "subtitle1" : "h6"}
            sx={{ fontWeight: 700, color: "#1976d2", letterSpacing: 1 }}
          >
            Unity Hospital Purnea
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="primary"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <Box
                sx={{ width: 220 }}
                role="presentation"
                onClick={() => setDrawerOpen(false)}
              >
                <List>
                  {navLinks.map((nav) => (
                    <ListItem key={nav.label} disablePadding>
                      <ListItemButton
                        selected={nav.active}
                        onClick={() => onNavClick(nav.label)}
                        sx={{
                          borderRadius: 2,
                          my: 0.5,
                          color: nav.active ? "#1976d2" : "#333",
                          bgcolor: nav.active
                            ? "rgba(25, 118, 210, 0.08)"
                            : "transparent",
                          "&:hover": { bgcolor: "rgba(25, 118, 210, 0.15)" },
                        }}
                      >
                        <ListItemText
                          primary={nav.label}
                          primaryTypographyProps={{
                            fontWeight: nav.active ? 700 : 500,
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          navLinks.map((nav) => (
            <Button
              key={nav.label}
              color="primary"
              onClick={() => onNavClick(nav.label)}
              sx={{
                mx: 0.5,
                px: 2,
                py: 1,
                borderRadius: 2,
                fontWeight: 600,
                bgcolor: nav.active
                  ? "rgba(25, 118, 210, 0.08)"
                  : "transparent",
                color: nav.active ? "#1976d2" : "#333",
                boxShadow: nav.active
                  ? "0 2px 8px 0 rgba(25, 118, 210, 0.08)"
                  : "none",
                transition: "all 0.2s",
                "&:hover": {
                  bgcolor: "rgba(25, 118, 210, 0.15)",
                  color: "#1976d2",
                },
              }}
            >
              {nav.label}
            </Button>
          ))
        )}
      </Toolbar>
    </AppBar>
  );
}
