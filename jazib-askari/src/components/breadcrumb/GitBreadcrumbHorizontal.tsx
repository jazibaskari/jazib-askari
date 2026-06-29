import { Box, Typography } from "@mui/material";

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface GitBreadcrumbProps {
  items: BreadcrumbItem[];
  color: string;
}

const GitBreadcrumbHorizontal = ({ items, color }: GitBreadcrumbProps) => {
  const itemWidth = 100;
  const stepHeight = 22;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        position: "relative",
      }}
    >
      {items.map((item, index) => (
        <Box
          key={item.label}
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            width: `${itemWidth}px`,
            mt: `${index * stepHeight}px`,
            height: "24px",
          }}
        >
          {index > 0 && (
            <Box
              sx={{
                position: "absolute",
                left: `-${itemWidth - 5}px`,
                top: `-${stepHeight - 12}px`,
                width: `${itemWidth}px`,
                height: `${stepHeight}px`,
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
              mr: 1,
              zIndex: 1,
              position: "relative",
              flexShrink: 0,
            }}
          />
          <Typography
            variant="body1Montreal"
            sx={{
              color: "text.primary",
              fontWeight: 500,
              fontSize: "0.85rem",
              whiteSpace: "nowrap",
            }}
          >
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default GitBreadcrumbHorizontal;
