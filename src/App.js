import logo from "./logo.svg";
import "./App.css";
import { Sigin } from "./components/Sigin";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Sigin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
