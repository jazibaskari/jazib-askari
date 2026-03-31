import { ThemeProvider } from "@mui/material/styles"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { theme } from "./styles/theme";
import Navbar from "./components/shared/Navbar";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline /> 
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
export default App;