// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

declare module "*.module.css";
