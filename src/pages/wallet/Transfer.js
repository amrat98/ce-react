import { Table } from "../../components/table/CommonTable";
const head = ["coin", "availaible balance", "locked balance"];
export const WalletTransfer = () => {
  return (
    <div className="WalletTransfer-Container">
      <div className="WalletTransfer-Amount-Container">
        <span>
          Current Value <br />
          4,99999213 INR
        </span>
        <span>
          Available Fund <br />
          4,99999213 INR
        </span>
        <span>
          Invested Amount <br />
          4,99999213 INR
        </span>
      </div>
      <div className="WalletTransfer-Table-Container">
        <span>Fiat Wallet</span>
        <Table head={head} />
      </div>
      <div className="WalletTransfer-Table-Container">
        <span>Crypto Wallet</span>
        <Table head={head} />
      </div>
    </div>
  );
};
