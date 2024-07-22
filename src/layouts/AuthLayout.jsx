import { Card } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#f5f9ff] bg-login-image bg-cover">
      <Card size="lg" className="w-[90%] sm:w-auto">
        <Outlet></Outlet>
      </Card>
    </div>
  );
};
