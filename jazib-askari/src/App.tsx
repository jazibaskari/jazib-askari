import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    {/* your app */}
  </ThemeProvider>
);

export default App;