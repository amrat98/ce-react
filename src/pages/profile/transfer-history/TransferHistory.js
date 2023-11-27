import { Table } from "../../../components/table/CommonTable";
const TableHead = ["User ID", "Coin Type", "Status", "Amount", "Create At"];
export const TransferHistory = () => {
    return <Table head={TableHead} />;
}