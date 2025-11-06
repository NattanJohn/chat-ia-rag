import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConfigPage from "./pages/ConfigPage";
import DocumentsPage from "./pages/DocumentsPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConfigPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
