import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const PageHeader = ({ title, buttonTitle, route }) => {
  const navigate = useNavigate();

  const hasButton = buttonTitle && route ? true : false;

  return (
    <Flex justifyContent="space-between" alignItems="center" className="mb-5">
      <Text flexGrow="1" fontWeight="bold" fontSize="2xl">
        {title}
      </Text>
      {hasButton && (
        <Button
          onClick={() => navigate(route)}
          colorScheme="blue"
          className="w-fit"
        >
          {buttonTitle}
        </Button>
      )}
    </Flex>
  );
};
