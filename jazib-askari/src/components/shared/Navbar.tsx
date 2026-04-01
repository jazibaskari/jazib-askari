import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button, Menu, MenuItem, Fade } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const alwaysVisible = ["Home", "About", "Skills"];
const mobileHidden = ["Experience", "Projects"];
interface NavbarProps {
  onNavClick: () => void;
}
const Navbar = ({ onNavClick }: NavbarProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpenMore = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMore = () => {
    setAnchorEl(null);
  };
  const handleScroll = (id: string) => {
    if (id === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    handleCloseMore();
    onNavClick();
  };
  const buttonStyle = {
    color: "text.primary",
    textTransform: "none",
    fontWeight: 500,
    fontSize: "0.95rem",
    minWidth: "auto",
    "&:hover": { bgcolor: "rgba(0,0,0,0.04)" }
  };
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: { xs: 0.5, sm: 2 },
        p: 2,
        bgcolor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      {alwaysVisible.map((s) => (
        <Button
          sx={buttonStyle}
          key={s}
          onClick={() => handleScroll(s)}
        >
          {s}
        </Button>
      ))}
      {mobileHidden.map((s) => (
        <Button
          key={s}
          onClick={() => handleScroll(s)}
          sx={{
            ...buttonStyle,
            display: { xs: "none", md: "inline-flex" }
          }}
        >
          {s}
        </Button>
      ))}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Button
          sx={buttonStyle}
          onClick={handleOpenMore}
          endIcon={<KeyboardArrowDownIcon />}
        >
          More
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMore}
          TransitionComponent={Fade}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          PaperProps={{
            sx: {
              mt: 1.5,
              borderRadius: "12px",
              minWidth: "150px",
              boxShadow: "0px 8px 24px rgba(0,0,0,0.1)"
            }
          }}
        >
          {mobileHidden.map((s) => (
            <MenuItem 
              key={s} 
              onClick={() => handleScroll(s)}
              sx={{ 
                color: "text.primary",
                py: 1.5, 
                px: 3,
                fontSize: "0.95rem",
                fontWeight: 500
              }}
            >
              {s}
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );
};
export default Navbar;