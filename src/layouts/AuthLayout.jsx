import { Card, CardBody, CardHeader } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Card maxWidth="510px" minWidth="410px" size="sm">
        <CardHeader>
          <h1 className="text-center text-xl font-bold">LOGO HERE</h1>
        </CardHeader>
        <CardBody>
          <Outlet></Outlet>
        </CardBody>
      </Card>
    </div>
  );
};
