import { DropDown } from "./DropDown";
import { Button } from "../../../components/button/Button";
export const UploadDocumet = () => {
  return (
    <>
      <div className="Document-Upload-Container">
        <div>
          <DropDown />
          <DropDown />
        </div>
        <div>
          {" "}
          <DropDown />
          <DropDown />
        </div>
      </div>
      <Button ClASSS={'blue'} style={{height: "50" , maxWidth: "185.707px" , margin: "0 auto"}}>Proceed</Button>
    </>
  );
};
