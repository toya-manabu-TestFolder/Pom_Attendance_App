// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import "./css/index.css";
import { Routes, Route } from "react-router-dom";
import RegistarInput from "../src/components/pages/RegistarInputPage/RegistarInput.tsx";
import Login from "../src/components/pages/LoginPage/Login.tsx";
import InputConfirmationPage from "./components/pages/InputConfirmationPage/InputConfirmationPage.tsx";
import CompletRegistPage from "./components/pages/CompletRegistPage/CompletRegistPage.tsx";
import HomePage from "./components/pages/HomePage/HomePage.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registar" element={<RegistarInput />} />
        <Route path="/inputConfirmation" element={<InputConfirmationPage />} />
        <Route path="/CompletRegist" element={<CompletRegistPage />} />
        <Route path="/Home" element={<HomePage />} />
      </Routes>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
