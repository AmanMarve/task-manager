import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div style={styles.layout}>
      <Sidebar />

      <main style={styles.main}>
        {children}
      </main>
    </div>
  );
};

const styles = {
  layout: {
    display: "flex",
    height: "100vh",
  },
  main: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
  },
};

export default Layout;