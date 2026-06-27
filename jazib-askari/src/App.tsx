import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { useMemo, useState } from "react";
import { getTheme } from "./styles/theme";
import { ColourModeContext } from "./context/ColourModeContext";
import Navbar from "./components/shared/Navbar";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ScrollToTop from "./utils/scrollToTop";
const App = () => {
  const [mode, setMode] = useState<"light" | "dark">(
    (localStorage.getItem("themeMode") as "light" | "dark") || "light"
  );
  const colourMode = useMemo(
    () => ({
      toggleColourMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
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
    <ColourModeContext.Provider value={colourMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <ScrollToTop />
          <Navbar onNavClick={handleNavClick} />
          <Routes>
            <Route path="/" element={<HomePage navTrigger={navTrigger} />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColourModeContext.Provider>
  );
};
export default App;
