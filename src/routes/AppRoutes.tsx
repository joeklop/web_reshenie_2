import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "../App";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<App />} />
        <Route
          path="*"
          element={<Navigate to={`/?marketplace="yandex"`} replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
