import { Box, Typography, Stack, IconButton, Container } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
const Footer = () => {
  const iconColor = "#bfc0c0";
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: { xs: 2, md: "150px" }, 
        borderTop: "1px solid",
        borderColor: "divider",
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
          variant="body2"
          sx={{ color: iconColor, fontWeight: 500, textAlign: { xs: "center", md: "left" } }}
        >
          © Jazib Askari. All rights reserved.
        </Typography>
        <Stack direction="row" spacing={1}>
          <IconButton
            href="https://github.com/yourusername"
            target="_blank"
            sx={{ color: iconColor, "&:hover": { color: "text.primary" } }}
          >
            <GitHubIcon fontSize="small" />
          </IconButton>
          <IconButton
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            sx={{ color: iconColor, "&:hover": { color: "text.primary" } }}
          >
            <LinkedInIcon fontSize="small" />
          </IconButton>
          <IconButton
            href="mailto:your.email@example.com"
            sx={{ color: iconColor, "&:hover": { color: "text.primary" } }}
          >
            <MailOutlineIcon fontSize="small" />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};
export default Footer;