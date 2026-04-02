import { ThemeProvider } from "@mui/material/styles"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { useMemo, useState, createContext } from "react";

import { getTheme } from "./styles/theme";

import Navbar from "./components/shared/Navbar";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

// Context to allow sub-components to toggle the theme
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const App = () => {
  // Initialize mode from localStorage if available, otherwise default to 'light'
  const [mode, setMode] = useState<'light' | 'dark'>(
    (localStorage.getItem("themeMode") as 'light' | 'dark') || 'light'
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem("themeMode", newMode);
          return newMode;
        });
      },
    }),
    []
  );

  const theme = useMemo(() => getTheme(mode), [mode]);
  const [navTrigger, setNavTrigger] = useState(0);

  const handleNavClick = () => {
    setNavTrigger((prev) => prev + 1);
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
        <BrowserRouter>
          <Navbar onNavClick={handleNavClick} />
          <Routes>
            <Route path="/" element={<HomePage navTrigger={navTrigger} />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;