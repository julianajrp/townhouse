import React from "react";
import { Routes, Route } from "react-router-dom";
import { LoginForm } from "../pages/LoginForm/loginForm";
import { RegisterForm } from "../pages/RegisterForm/registerForm";
import { ProtectedRoutes } from "../context/protectedRoutes";
import { ResidentDash } from "../pages/ResidentDash/residentDash";
import { SyndicDash } from "../pages/SyndicDash/syndicDash";
import { Wall } from "../components/Wall/wall";
import { ReservationProviderComponent } from "../context/providers/reservationProvider";
import { ProtectedSyndic } from "../context/protectedSyndic";
import { UserProviderComponent } from "../context/providers/userProvider";
import IssuesOutlet from "../components/Issues/issues";
import { IssuesProviderComponent } from "../context/providers/issuesProvider";
import { Profile } from "../components/Profile/profile";
import LandingPage from "../components/Landing/LandingPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />

      {/* //Rotas que precisam de autenticação do token */}
      <Route element={<ProtectedRoutes />}>
        {/* Rotas protegidas do sindico */}
        <Route element={<ProtectedSyndic />}>
          <Route path="/syndic_dashboard" element={<SyndicDash />}>
            <Route index element={<IssuesProviderComponent />} />
            <Route
              path="/syndic_dashboard/reservas"
              element={<ReservationProviderComponent />}
            />
            <Route
              path="/syndic_dashboard/resident_delete"
              element={<UserProviderComponent />}
            />
            <Route path="/syndic_dashboard/profile" element={<Profile />} />
          </Route>
        </Route>

        <Route path="/resident_dashboard" element={<ResidentDash />}>
          <Route index element={<IssuesProviderComponent />} />
          <Route
            path="/resident_dashboard/reservas"
            element={<ReservationProviderComponent />}
          />
          <Route path="/resident_dashboard/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
};
