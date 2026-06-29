import { Box, Typography } from "@mui/material";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface GitBreadcrumbProps {
  items: BreadcrumbItem[];
  color: string;
}

const GitBreadcrumb = ({ items, color }: GitBreadcrumbProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", my: 2, ml: 1 }}>
      {items.map((item, index) => (
        <Box
          key={item.label}
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            minHeight: "40px",
            pl: index * 4,
          }}
        >
          {index > 0 && (
            <Box
              sx={{
                position: "absolute",
                left: (index - 1) * 32 + 12,
                top: -20,
                width: "20px",
                height: "40px",
                borderLeft: `2px solid ${color}`,
                borderBottom: `2px solid ${color}`,
                borderBottomLeftRadius: "12px",
                zIndex: 0,
                pointerEvents: "none",
              }}
            />
          )}
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              border: `2px solid ${color}`,
              bgcolor: "background.default",
              mr: 2,
              zIndex: 1,
              position: "relative",
            }}
          />
          <Typography
            variant="body1Montreal"
            sx={{
              color: "text.primary",
              fontWeight: 500,
              fontSize: "0.95rem",
            }}
          >
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default GitBreadcrumb;
