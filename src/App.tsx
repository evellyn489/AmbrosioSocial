// App.tsx
import './styles/global.scss'; // Importe os estilos globais
import { AppRoutes } from './Routes';
import { ThemeProvider } from '../src/contexts/ThemeProvider';
import { FontSizeProvider } from './contexts/FontSizeContext/FontSizeContext';
import "./styles/global.scss";
import { UserProvider } from "./contexts/UserProvider";

export function App() {
  return (
    <FontSizeProvider>
      <ThemeProvider> 
        <AppRoutes />
      </ThemeProvider>
    </FontSizeProvider>
  );
    <ThemeProvider> 
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </ThemeProvider>
  )
}
