import Table from "rc-table";
import { Box } from "@chakra-ui/react";

const renderAsPercent = (rate: number) => {
  if (!rate) {
    return "NO DATA";
  }

  return `${rate}%`;
};

const columns = [
  {
    title: "School",
    dataIndex: "name",
    key: "name",
    onCell: () => ({
      style: {
        padding: "5px",
      },
    }),
  },
  {
    title: "Admission Type",
    dataIndex: "admissionType",
    key: "admissionType",
  },
  {
    title: "Average Daily Attendance",
    dataIndex: "averageDailyAttendance",
    key: "averageDailyAttendance",
    render: renderAsPercent,
  },
  {
    title: "Graduation Rate",
    dataIndex: "graduationRate",
    key: "graduationRate",
    render: renderAsPercent,
  },
];
const AllItemsTable = ({ data }) => {
  return (
    <Box
      padding="20px"
      margin="auto"
      border="1px solid lightgray"
      borderRadius="5px"
    >
      <Table
        onRow={() => ({
          style: { borderBottom: "1px solid black", padding: "5px" },
        })}
        data={data}
        columns={columns}
      />
    </Box>
  );
};

export default AllItemsTable;
