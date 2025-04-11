"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ClientPage } from "./ClientPage";
import { theme } from "./theme";

export default function Home() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ClientPage />
      </ThemeProvider>
    </main>
  );
}
