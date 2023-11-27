import "./Security.css";

export const Chip = ({ icon, children, title }) => {
  return (
    <>
      <div className="Chip-Container">
        <div className="Left-Box">
          <img src={`/assets/icons/${icon}.svg`} alt={icon} />
          <div>
            <h3 className="auth-head">{title}</h3>
            <p>Used for withdraw & security modification</p>
          </div>
        </div>
        <div className="Right-Box">{children}</div>
      </div>
    </>
  );
};

