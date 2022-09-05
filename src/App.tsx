import React from "react";
import "normalize.css";
import "css/global.css";
import MainLayout from "./layout/MainLayout";
import Home from "components/Home/Home";

function App() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}

export default App;
