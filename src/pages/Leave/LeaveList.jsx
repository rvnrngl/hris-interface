import React from "react";
import { PageWrapper } from "../../components/Page/PageWrapper";
import { CardBody } from "@chakra-ui/react";
import { PageHeader } from "../../components/Page/PageHeader";
import { Table } from "../../components/Table/Table";

export const LeaveList = () => {
  return (
    <PageWrapper>
      <PageHeader title="List of Leaves" buttonTitle="Add Leave" />
      <CardBody>
        <Table />
      </CardBody>
    </PageWrapper>
  );
};
