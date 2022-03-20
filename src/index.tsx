import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import { AuthProvider } from "react-oidc-context";
import Profile from "./profile";
import Login from "./login";
import RouterUtils from "./route-utils";

const oidcConfig = {
  authority: "/",
  client_id: "react-client",
  redirect_uri: "https://localhost:7190/authentication/login-callback",
  post_logout_redirect_uri:
    "https://localhost:7190/authentication/logout-callback",
  scope: "openid profile"
};

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider {...oidcConfig}>  
      <BrowserRouter>
        <RouterUtils>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/authentication/*" element={<Home authenticating />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </RouterUtils>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
