import "./css/App.module.css";
import { Routes, Route } from "react-router-dom";
import RegistarInput from "./pages/RegistarInput";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegistarInput />} />
    </Routes>
  );
}

export default App;
