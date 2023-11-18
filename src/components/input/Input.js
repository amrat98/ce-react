import "./Input.css";
export const Input = ({ label, placeholder, name }) => {
  return (
    <>
      <div className="Input-Box">
        <label>{label}</label>
        <div>
          <input placeholder={placeholder} name={name} />
        </div>
      </div>
    </>
  );
};


export const DateInput = ({ label, placeholder, name }) => {
  return (
    <>
      <div className="Input-Box">
        <label>{label}</label>
        <div>
          <input placeholder={placeholder} name={name} type="date"/>
        </div>
      </div>
    </>
  );
};
