import Table from "rc-table";

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
  return <Table data={data} columns={columns} />;
};

export default AllItemsTable;
