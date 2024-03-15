import "./styles/global.scss";
import { AppRoutes } from "./Routes";
import { ThemeProvider } from "../src/contexts/ThemeProvider";
import { UserProvider } from "./contexts/UserProvider";

export function App() {
  return (
    <ThemeProvider> 
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </ThemeProvider>
  )
}
