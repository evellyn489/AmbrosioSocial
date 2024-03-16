import './styles/global.scss';
import { AppRoutes } from './Routes';
import { ThemeProvider } from '../src/contexts/ThemeProvider';
import { FontSizeProvider } from './contexts/FontSizeContext/FontSizeContext';
import "./styles/global.scss";
import { UserProvider } from "./contexts/UserProvider";

export function App() {
  return (
    <FontSizeProvider>
      <ThemeProvider>
        <UserProvider>
        <AppRoutes />
        </UserProvider>
      </ThemeProvider>
    </FontSizeProvider>
  );
}
