import "./Input.css";
export const Input = ({ label, placeholder, name }) => {
  return (
    <>
      {label !== "number" ? (
        <>
          <div className="Input-Box">
            <label>{label}</label>
            <input placeholder={placeholder} name={name} />
          </div>
        </>
      ) : (
        <>
          <div className="Input-Box">
            <label>{label}</label>
            <input placeholder={placeholder} name={name} />
          </div>
        </>
      )}
    </>
  );
};
