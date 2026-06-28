const TaskRow = ({ task }) => {
  const style = {
    card: {
      borderBottom: "#2121215d solid 2px",
      padding: "10px",
      borderRadius: "10px",
      marginBottom: "10px",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
    },

    buttonContainer: {
      display: "flex",
      gap: "8px",
    },

    button: {
      padding: "8px",
      borderRadius: "10px",
      border: "none",
      backgroundColor: "#212121",
      color: "white",
      cursor: "pointer",
    },
    deleteButton: {
      padding: "8px",
      borderRadius: "10px",
      border: "none",
      backgroundColor: "#c00000",
      color: "white",
      cursor: "pointer",
    },
    middle: {
      display: "flex",
      gap: "15px",
      alignItems: "center",
    },
  };

  const statusConfig = {
    "backlog": {
      label: "Backlog",
      color: "#c58f22",
    },
    "in-progress": {
      label: "In Progress",
      color: "#f59e0b",
    },
    "completed": {
      label: "Completed",
      color: "#6366f1",
    },
  };

  const priorityConfig = {
    high: {
      label: "H",
      color: "#ef4444",
    },
    medium: {
      label: "M",
      color: "#f59e0b",
    },
    low: {
      label: "L",
      color: "#22c55e",
    },
  };

  const status = statusConfig[task.status];
  const priority = priorityConfig[task.priority];

  const formattedData = {
    createdAt: task.createdAt
      ? new Date(task.createdAt).toLocaleDateString("en-IN")
      : "N/A",
  };

  return (
    <div style={style.card}>
      <div style={style.header}>
        <a style={style.title}>{task.title}</a>
        <div style={style.middle}>
          <p style={{ backgroundColor: status.color, color: "white", padding: "4px", borderRadius: "4px" }}>
            {status.label}
          </p>
          <p style={{ backgroundColor: priority.color, color: "white", padding: "10px", borderRadius: "50px" }}>
            {priority.label}
          </p>
          <p>{formattedData.createdAt}</p>
          <div style={style.buttonContainer}>
            <button style={style.button}>Edit</button>
            <button style={style.deleteButton}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskRow;
