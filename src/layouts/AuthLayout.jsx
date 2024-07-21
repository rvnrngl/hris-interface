import { Card } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-login-image bg-cover px-5">
      <Card size="lg">
        <Outlet></Outlet>
      </Card>
    </div>
  );
};
