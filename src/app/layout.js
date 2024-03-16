import theme from '../theme';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import NavBar from "@/components/NavBar";
import "./globals.css";

export const metadata = {
      title: "Tienda Putumayo",
      description: "Tienda en linea del departamento del Putumayo en Colombia",
      manifest: '/manifest.json',
    icons: {
      apple: 'icon-512x512.png',
    },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
              <NavBar />
              {children}
          </ThemeProvider>
      </AppRouterCacheProvider>
      </body>
    </html>
  );
}
