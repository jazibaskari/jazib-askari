import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";
const App = () => (
  <ThemeProvider theme={theme}>
  </ThemeProvider>
);
export default App;