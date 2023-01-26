import React from "react";
import { ResidentDeleteOutlet } from "../../components/DeleteResident/residentDelete";
import { UserProvider } from "../userContextL";

export const UserProviderComponent = () => {
  return (
    <UserProvider>
      <ResidentDeleteOutlet />
    </UserProvider>
  );
};
