import { Box } from "@mui/system";
import { Button } from "@mui/material";
const sections = ["Home", "About", "Projects"];
const Navbar = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        gap: 2,
        p: 2,
        bgcolor: "background.paper",
      }}
    >
      {sections.map((s) => (
       <Button
       key={s}
       onClick={() => handleScroll(s)}
       sx={{
         typography: "body1",     
         color: "text.primary",  
         textTransform: "none",  
         "&:hover": {
           backgroundColor: "transparent", 
         },
       }}
     >
       {s}
     </Button>
      ))}
    </Box>
  );
};
export default Navbar;