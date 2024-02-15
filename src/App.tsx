import "./styles/global.scss";
import { AppRoutes } from "./Routes";
import { ThemeProvider } from "../src/contexts/ThemeProvider";

export function App() {
  return (
    <ThemeProvider> 
      <AppRoutes />
    </ThemeProvider>
  )
}
