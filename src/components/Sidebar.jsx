import { Link, NavLink } from "react-router-dom";

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
    link: {
      display: "block",
      marginBottom: "10px",
      borderBottom: "#2121215d solid 1px",
      padding: "10px",
      borderRadius: "5px",
      textDecoration: "none",
      color: "#000",
    },
    activeLink: {
      backgroundColor: "#212121",
      color: "#fff",
    },
    ul: {
      padding: "10px 0 0 0px",
      listStyleType: "none",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
    logout: {
      marginTop: "auto",
      backgroundColor: "#b40000",
      color: "white",
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
          <NavLink
            to="/"
            style={({ isActive }) => ({
              ...style.link,
              ...(isActive ? style.activeLink : {}),
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/task"
            style={({ isActive }) => ({
              ...style.link,
              ...(isActive ? style.activeLink : {}),
            })}
          >
            Add Task
          </NavLink>
        </ul>
      </div>
      <h3 style={style.logout}>
        <Link style={{textDecoration: "none", color: "white"}}>
          Logout
        </Link>
      </h3>
    </div>
  );
};

export default Sidebar;
