import FilterDropdown from "../components/FilterDropdown";
import { LuSignalMedium, LuSignalLow, LuSignalHigh } from "react-icons/lu";
import {FaClock,FaCheckCircle} from "react-icons/fa"
import { FaCircleHalfStroke } from "react-icons/fa6";


const Tasks = () => {
  const filters = [
    {
      id: "status",
      label: "Backlog",
      options: [
        { label: "Backlog", icon: <FaClock/> },
        { label: "Todo", icon: <FaCircleHalfStroke fill="yellow"/> },
        { label: "Done", icon: <FaCheckCircle/> },
      ],
    },
    {
      id: "priority",
      label: "Low",
      options: [
        { label: "Low", icon: <LuSignalLow /> },
        { label: "Medium", icon: <LuSignalMedium /> },
        { label: "High", icon: <LuSignalHigh /> },
      ],
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
    btns:{
      marginTop:"20px",
      fontSize:"18px",
      backgroundColor:"#212121",
      padding:"8px 15px",
      color:"white",
      border:"1px solid #a49e9e",
      borderRadius:'20px'
    }
  };

  return (
    <div>
      <h1>New Task</h1>
      <div style={{ marginTop: "20px" }}>
        <input style={style.input} type="text" placeholder="Title..." />
        <br />
        <hr />
        <textarea style={style.textarea} placeholder="Description"></textarea>
        <br />
      </div>
      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        {filters.map((filter) => (
          <FilterDropdown
            key={filter.id}
            label={filter.label}
            options={filter.options}
          />
        ))}
      </div>
      <div style={{display:"flex", gap:"10px"}}>
        <button style={style.btns}>Cancel</button>
        <button style={style.btns}>Create</button>
      </div>
    </div>
  );
};

export default Tasks;
