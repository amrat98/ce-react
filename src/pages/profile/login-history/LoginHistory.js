import { Table } from "../../../components/table/CommonTable";
const TableHead = ["User ID", "Coin Type", "Status", "Amount", "Create At"];
export const LoginHistory = () => {
  return (
    <>
      <Table head={TableHead} />
    </>
  );
};
