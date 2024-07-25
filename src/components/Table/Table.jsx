import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { formatDate } from "../../helpers/formatDate";

export const Table = () => {
  const [rowData, setRowData] = useState([
    {
      leaveType: "Annual",
      leaveStartDate: "2024-01-01",
      leaveEndDate: "2024-01-10",
      leaveDuration: 10,
      leaveStatus: "Approved",
      leaveBalance: 15,
      appliedDate: "2023-12-15",
      approverName: "John Doe",
    },
    {
      leaveType: "Sick",
      leaveStartDate: "2024-02-15",
      leaveEndDate: "2024-02-18",
      leaveDuration: 4,
      leaveStatus: "Approved",
      leaveBalance: 12,
      appliedDate: "2024-02-10",
      approverName: "Jane Smith",
    },
    {
      leaveType: "Maternity",
      leaveStartDate: "2024-03-01",
      leaveEndDate: "2024-05-01",
      leaveDuration: 60,
      leaveStatus: "Approved",
      leaveBalance: 0,
      appliedDate: "2024-01-20",
      approverName: "John Doe",
    },
    {
      leaveType: "Annual",
      leaveStartDate: "2024-06-10",
      leaveEndDate: "2024-06-20",
      leaveDuration: 11,
      leaveStatus: "Pending",
      leaveBalance: 10,
      appliedDate: "2024-05-30",
      approverName: "Jane Smith",
    },
    {
      leaveType: "Sick",
      leaveStartDate: "2024-07-01",
      leaveEndDate: "2024-07-05",
      leaveDuration: 5,
      leaveStatus: "Rejected",
      leaveBalance: 12,
      appliedDate: "2024-06-28",
      approverName: "John Doe",
    },
    {
      leaveType: "Annual",
      leaveStartDate: "2024-08-15",
      leaveEndDate: "2024-08-20",
      leaveDuration: 6,
      leaveStatus: "Approved",
      leaveBalance: 4,
      appliedDate: "2024-08-01",
      approverName: "Jane Smith",
    },
    {
      leaveType: "Sick",
      leaveStartDate: "2024-09-10",
      leaveEndDate: "2024-09-15",
      leaveDuration: 6,
      leaveStatus: "Pending",
      leaveBalance: 8,
      appliedDate: "2024-09-05",
      approverName: "John Doe",
    },
    {
      leaveType: "Annual",
      leaveStartDate: "2024-10-01",
      leaveEndDate: "2024-10-05",
      leaveDuration: 5,
      leaveStatus: "Approved",
      leaveBalance: 20,
      appliedDate: "2024-09-20",
      approverName: "Jane Smith",
    },
    {
      leaveType: "Maternity",
      leaveStartDate: "2024-11-01",
      leaveEndDate: "2025-01-01",
      leaveDuration: 62,
      leaveStatus: "Approved",
      leaveBalance: 0,
      appliedDate: "2024-09-10",
      approverName: "John Doe",
    },
    {
      leaveType: "Sick",
      leaveStartDate: "2024-12-05",
      leaveEndDate: "2024-12-10",
      leaveDuration: 6,
      leaveStatus: "Approved",
      leaveBalance: 6,
      appliedDate: "2024-12-01",
      approverName: "Jane Smith",
    },
  ]);

  const [colDefs, setColDefs] = useState([
    {
      headerCheckboxSelection: true,
      checkboxSelection: true,
      width: 50,
    },
    {
      field: "approverName",
      headerName: "Approver Name",
    },
    {
      field: "leaveType",
      headerName: "Type",
    },
    {
      field: "leaveStartDate",
      headerName: "Start Date",

      valueGetter: (params) => formatDate(params.data.leaveStartDate),
    },
    {
      field: "leaveEndDate",
      headerName: "End Date",

      valueGetter: (params) => formatDate(params.data.leaveEndDate),
    },
    {
      field: "leaveDuration",
      headerName: "Duration (in days)",
    },
    {
      field: "leaveStatus",
      headerName: "Status",
    },
    {
      field: "leaveBalance",
      headerName: "Balance",
    },
    {
      field: "appliedDate",
      headerName: "Applied Date",

      valueGetter: (params) => formatDate(params.data.appliedDate),
    },
  ]);

  return (
    <div className="ag-theme-quartz h-fit">
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
        rowSelection="multiple"
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 50, 100]}
        domLayout="autoHeight"
      />
    </div>
  );
};
