import { ThemeProvider } from "@mui/material/styles"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { useState } from "react";

import { theme } from "./styles/theme";

import Navbar from "./components/shared/Navbar";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

const App = () => {
  // Logic must live inside curly braces before the return statement
  const [navTrigger, setNavTrigger] = useState(0);

  const handleNavClick = () => {
    setNavTrigger((prev) => prev + 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <BrowserRouter>
        {/* Pass the click handler to the Navbar */}
        <Navbar onNavClick={handleNavClick} />
        <Routes>
          {/* Pass the trigger state to the HomePage */}
          <Route path="/" element={<HomePage navTrigger={navTrigger} />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;