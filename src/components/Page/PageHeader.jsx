import { Button, CardHeader, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const PageHeader = ({ title, buttonTitle }) => {
  return (
    <CardHeader>
      <Flex justifyContent="space-between" alignItems="center">
        <Text flexGrow="1" fontWeight="bold" fontSize="2xl">
          {title}
        </Text>
        <Button colorScheme="blue" className="w-fit">
          {buttonTitle}
        </Button>
      </Flex>
    </CardHeader>
  );
};
