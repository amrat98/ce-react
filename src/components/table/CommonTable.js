import { NoData } from "../nodata/NoData";
import "./CommonTable.css";
export const Table = ({ head, data }) => {
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
        {data && <tbody></tbody>}
      </table>
      {!data && <NoData label={"No record Found!"} />}
    </>
  );
};
