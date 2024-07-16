import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="bg-login-image flex h-screen w-screen flex-col items-center justify-center bg-cover px-5">
      <Card size="lg">
        {/* <CardHeader>
          <Heading className="text-center">LOGO HERE</Heading>
        </CardHeader> */}
        <Outlet></Outlet>
      </Card>
    </div>
  );
};
