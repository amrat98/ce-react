import { DropDown } from "./DropDown";
export const UploadDocumet = () => {
  return (
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
  );
};
