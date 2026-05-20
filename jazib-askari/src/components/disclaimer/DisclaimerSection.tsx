import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: { xs: 4, md: "100px" },
        bgcolor: "background.paper",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 3,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "text.grey",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          © Jazib Askari. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;
