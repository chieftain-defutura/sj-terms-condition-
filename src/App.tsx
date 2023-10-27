import React from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import TermsConditions from "./pages/terms-condition";
import Header from "./components/header";
import RefundPolicy from "./pages/refundPolicy";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<TermsConditions />} />
        <Route path="/terms&conditions" element={<TermsConditions />} />
      </Routes>
      <Routes>
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
    </div>
  );
}

export default App;
