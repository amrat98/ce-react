import { NoData } from "../nodata/NoData";
import "./CommonTable.css";
export const Table = ({ head, data, children }) => {
  return (
    <>
      <table className="cmn-table">
        <thead>
          <tr>
            {head?.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </>
  );
};
