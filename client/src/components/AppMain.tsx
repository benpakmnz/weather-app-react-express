import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeatherPage from "../Pages/Weather/Weather";
import Login from "../Pages/Login";
import RequireAuth from "./RequireAuth";

const AppMain: React.FC = () => {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <WeatherPage />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default AppMain;
