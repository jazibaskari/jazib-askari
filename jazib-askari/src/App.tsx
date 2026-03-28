import { ThemeProvider } from "@mui/system";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./styles/theme";

import Navbar from "./components/shared/Navbar";
import HomePage from "./pages/HomePage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

const App = () => (
  <ThemeProvider theme={theme}>
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