import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./home";
import { AuthProvider } from "react-oidc-context";

const oidcConfig = {
  authority: "/",
  client_id: "react-client",
  redirect_uri: "https://localhost:3000/authentication/login-callback",
  post_logout_redirect_uri:
    "https://localhost:3000/authentication/logout-callback",
};

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/authentication/*"
            element={<Home authenticating />}
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
