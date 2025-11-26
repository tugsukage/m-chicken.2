import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import React from "react";

const NotFound: React.FC = () => (
  <div>
    <h1>404 - Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </div>
);

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
