import React from "react";
import { Dialog, ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";
import Header from "components/Header/Header";
import AppContextProvider from "../context/AppContextProvider";

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <Header />
        <main>{children}</main>
      </AppContextProvider>
    </ThemeProvider>
  );
};

export default MainLayout;
