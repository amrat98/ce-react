import "./Sidebar.css";
export const Sidebar = ({ style, option, handle, titleHandle }) => {
  return (
    <>
      <div className="Sidebar-Container" style={style}>
        <ul className="Sidebar-List">
          {option?.map((item, index) => {
            return (
              <li
                key={index}
                className={item.bool ? "sidebar-active" : "sidebar-disable"}
                onClick={() => {
                  handle(index);
                  titleHandle(item.label);
                }}
              >
                {" "}
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
