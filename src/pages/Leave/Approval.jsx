import React, { useEffect, useState } from "react";
import Leave from "../../data/Leave.json";
import { Card } from "../../components/Card/Card";
import { Box, Button, ButtonGroup, Flex, Text } from "@chakra-ui/react";

export const Approval = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 4; // Updated to 6

  useEffect(() => {
    // Simulating fetching data from Leave.json
    setUsers(Leave);
  }, []);

  // Calculate the indices of the first and last user on the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Calculate the total number of pages
  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto">
      <h1 className="mb-8 text-center text-3xl font-bold">Leave List</h1>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {currentUsers.map((user) => (
          <div key={user.id} className="flex w-full justify-center">
            <Card user={user} />
          </div>
        ))}
      </div>
      <Flex justifyContent="center" mt={4}>
        <ButtonGroup variant="outline" spacing="2">
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              isActive={currentPage === index + 1}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </ButtonGroup>
      </Flex>
    </div>
  );
};
