import React from "react";
import { Card, CardBody } from "@chakra-ui/react";
import { PageHeader } from "../../components/Page/PageHeader";
import { Table } from "../../components/Table/Table";
import { PageWrapper } from "../../components/Page/PageWrapper";

export const LeaveList = () => {
  return (
    <PageWrapper>
      <PageHeader
        title="Leave Requests"
        buttonTitle="Add Leave"
        route="/leave/form"
      />
      <Card>
        <CardBody>
          <Table />
        </CardBody>
      </Card>
    </PageWrapper>
  );
};
