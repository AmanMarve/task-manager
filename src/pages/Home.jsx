import { useEffect, useState } from "react";
import TaskRow from "../components/TaskRow";
import {getTasks} from "../services/taskService";

const Home = () => {
  const [tasks,setTasks] = useState([]);

  useEffect(()=>{
    const fetchTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  },[]);

  const style = {
    header: {
      display: "flex",
      gap: "8px",
      padding: "10px",
    },
    input: {
      border: "#2121215d solid 2px",
      padding: "8px",
      borderRadius: "10px",
      width: "20rem",
    },
    button: {
      padding: "8px",
      borderRadius: "10px",
      border: "none",
      backgroundColor: "#212121",
      color: "white",
      cursor: "pointer",
    },
    hr: {
      margin: "10px 0",
      border: "#46444452 solid 1px",
    },
  };
  return (
    <div style={{ padding: "20px",backgroundColor:"#f5f5f5" }}>
      <header style={style.header}>
        <input type="text" placeholder="Search task....." style={style.input} />
        <button style={style.button}>Search</button>
      </header>
      <hr style={style.hr} />
      <div>
        {tasks.map((task) => (
          <TaskRow key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Home;
