import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import theme from "./theme.js";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={appStore}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
