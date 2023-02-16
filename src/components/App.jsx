import "../App.css";
import HomePage from "./Homepage";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </div>
  );
}

export default App;
