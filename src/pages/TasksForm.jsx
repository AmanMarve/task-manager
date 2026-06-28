import FilterDropdown from "../components/FilterDropdown";
import { LuSignalMedium, LuSignalLow, LuSignalHigh } from "react-icons/lu";
import { FaClock, FaCheckCircle } from "react-icons/fa";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { useState } from "react";
import { createTask } from "../services/taskService";
import { useNavigate } from "react-router-dom";

const Tasks = () => {
  const statusOptions = [
    {
      value: "backlog",
      label: "Backlog",
      icon: <FaClock />,
    },
    {
      value: "in-progress",
      label: "In-Progress",
      icon: <FaCircleHalfStroke fill="yellow" />,
    },
    {
      value: "completed",
      label: "Completed",
      icon: <FaCheckCircle fill="green" />,
    },
  ];

  const priorityOptions = [
    {
      value: "low",
      label: "Low",
      icon: <LuSignalLow />,
    },
    {
      value: "medium",
      label: "Medium",
      icon: <LuSignalMedium />,
    },
    {
      value: "high",
      label: "High",
      icon: <LuSignalHigh />,
    },
  ];

  const style = {
    input: {
      padding: "10px",
      borderRadius: "10px",
      outline: "none",
      border: "none",
      width: "full",
      fontSize: "22px",
    },
    textarea: {
      padding: "10px",
      borderRadius: "10px",
      outline: "none",
      border: "none",
      width: "100%",
      height: "100px",
      fontSize: "18px",
    },
    select: {
      height: "25px",
      padding: "1px",
      width: "100spx",
      borderRadius: "20px",
      fontSize: "13px",
    },
    btns: {
      backgroundColor: "white",
      marginTop: "20px",
      fontSize: "18px",
      padding: "8px 15px",
      color: "#212121",
      border: "1px solid #212121",
      borderRadius: "5px",
    },
  };

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "backlog",
    priority: "low",
  });
  const navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      await createTask(formData);
      alert("Task Created Successfully!");
      navigate('/home')
      setFormData({
        title: "",
        description: "",
        status: "backlog",
        priority: "low",
      });
    } catch (e) {
      alert("Error Creating Task:", e);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setFormData({
      title: "",
      description: "",
      status: "backlog",
      priority: "low",
    });
  };

  return (
    <div>
      <h1>New Task</h1>
      <div style={{ marginTop: "20px" }}>
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          style={style.input}
          type="text"
          placeholder="Title..."
        />
        <br />
        <hr />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          style={style.textarea}
          placeholder="Description"
        ></textarea>
        <br />
      </div>
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <FilterDropdown
          label="Status"
          value={formData.status}
          options={statusOptions}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              status: value,
            }))
          }
        />

        <FilterDropdown
          label="Priority"
          value={formData.priority}
          options={priorityOptions}
          onChange={(value) =>
            setFormData((prev) => ({
              ...prev,
              priority: value,
            }))
          }
        />
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleCancel} style={style.btns}>
          Cancel
        </button>
        <button onClick={handleSubmit} style={style.btns}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Tasks;
