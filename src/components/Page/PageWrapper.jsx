import { Box } from "@chakra-ui/react";
import React from "react";

export const PageWrapper = ({ children }) => {
  return (
    <Box as="main" minH="91vh" className="p-5">
      {children}
    </Box>
  );
};
