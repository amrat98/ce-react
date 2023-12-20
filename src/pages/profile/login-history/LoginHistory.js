import { Table } from "../../../components/table/CommonTable";
import { useSelector } from "react-redux";
import { dateFormat } from "../../../utlis/Utils";
const TableHead = ["Date & Time", "Login From", "IP Address", "Location", "Email Address/Mobile Numer" , "Source" , "Activity" , "Status"];
export const LoginHistory = () => {
  const loginHistory = useSelector((state) => state?.user.loginHistory);
  return (
    <>
      <Table head={TableHead}>
        {loginHistory?.map((data) => (
          <tr>
            <td>{dateFormat(data?.login_time)}</td>
            <td>{data?.createdAt}</td>
            <td>{data?.createdAt}</td>
            <td>{data?.createdAt}</td>
            <td>{data?.loginType}</td>
            <td>{data?.createdAt}</td>
            <td>{data?.createdAt}</td>
            <td>{data?.createdAt}</td>
          </tr>
        ))}
      </Table>
    </>
  );
};
