import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/home-page";
import ArtPage from "./pages/art-page/art-page";
import OrderPage from "./pages/order-page/order-page";
import { paths } from "./paths";
import CreateArtPage from "./pages/create-page/create-art-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={paths.home} element={<HomePage />}></Route>
        <Route path={`${paths.art}/:id`} element={<ArtPage />}></Route>
        <Route path={paths.createArt} element={<CreateArtPage />}></Route>
        <Route path={paths.order} element={<OrderPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
