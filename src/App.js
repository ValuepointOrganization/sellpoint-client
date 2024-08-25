import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/globalStyle";
import Main from "./pages/Main";
import AnalystList from "./pages/AnalystList";
import AnalystDetail from "./pages/AnalystDetail";
import AnalystReport from "./pages/AnalystReport";
import StockDetail from "./pages/StockDetail";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/analyst-list" element={<AnalystList />} />
          <Route path="/analyst/:analystID" element={<AnalystDetail />} />
          <Route path="/analyst-report" element={<AnalystReport />} />
          <Route path="/stock/:stockId" element={<StockDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
