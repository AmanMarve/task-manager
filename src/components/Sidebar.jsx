import { Link } from "react-router-dom";

const Sidebar = () => {
  const style = {
    Sidebar: {
      width: "250px",
      height: "100vh",
      backgroundColor: "#f0f0f0",
      padding: "10px",
      display: "flex",
      flexDirection: "column",
    },
    h1: {
      margin: "0 0 20px 0",
      padding: "10px",
    },
    ul: {
      padding: "10px 0 0 0px",
      listStyleType: "none",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    li: {
      marginBottom: "10px",
      backgroundColor: "#e0e0e0",
      padding: "10px",
      borderRadius: "5px",
      cursor: "pointer",
    },
    logout: {
      marginTop: "auto",
      backgroundColor: "#e0e0e0",
      padding: "10px",
      borderRadius: "5px",
      cursor: "pointer",
      textAlign: "center",
    },
    Link: {
      textDecoration: "none",
      color: "black",
    },
  };
  return (
    <div style={style.Sidebar}>
      <div>
        <h2 style={style.h1}>Task-Manager</h2>
        <ul style={style.ul}>
          <Link style={style.Link} to="/">
            {" "}
            <li style={style.li}>Home</li>
          </Link>
          <Link style={style.Link} to="/tasks">
            <li style={style.li}>Tasks</li>
          </Link>
        </ul>
      </div>
      <h3 style={style.logout}>
        <Link style={style.Link} to="/logout">
          Logout
        </Link>
      </h3>
    </div>
  );
};

export default Sidebar;
