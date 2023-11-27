import { useState } from "react";
import "./DropDown.css";
export const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [documentImage, setDocumentImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setDocumentImage(reader.result);
      };
      reader.readAsDataURL(file);
      setIsOpen(!isOpen);
    }
  };

  const handleUpload = () => {
    document.getElementById("fileInput").click();
  };
  return (
    <div className="Document-Main-Container">
      <h3>Select Document Type</h3>
      <div className="Dropdown-Container">
        <div onClick={() => setIsOpen(!isOpen)}>
          <span>Select Document</span>
          <img src="/assets/icons/nabla.svg" alt="" />
        </div>
        {isOpen && (
          <ul>
            <li onClick={handleUpload}>
              <span>Pan Card</span>{" "}
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />{" "}
              <img src="/assets/icons/Upload.svg" alt="Upload" />
            </li>
            <li onClick={handleUpload}>
              <span>Aadhar Card</span>{" "}
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />{" "}
              <img src="/assets/icons/Upload.svg" alt="Upload" />
            </li>
            <li onClick={handleUpload}>
              <span>Passport</span>{" "}
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />{" "}
              <img src="/assets/icons/Upload.svg" alt="Upload" />
            </li>
          </ul>
        )}
      </div>
      {documentImage && <img src={documentImage} alt="documentImage" />}
    </div>
  );
};
