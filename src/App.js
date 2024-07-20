import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/styles/globalStyle";
import Main from "./pages/Main";
import AnalystList from "./pages/AnalystList";
import AnalystDetail from "./pages/AnalystDetail";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/analyst-list" element={<AnalystList />} />
          <Route path="/analyst/:i" element={<AnalystDetail />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
