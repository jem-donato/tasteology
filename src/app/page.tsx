"use client";
import { ThemeProvider } from "@mui/material/styles";
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
