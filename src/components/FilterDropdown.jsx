import { useState, useRef, useEffect } from "react";

const FilterDropdown = ({ label, options }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(
    options.find((option) => option.label === label) || label,
  );
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={ref}>
      <button style={{display:"flex", alignItems:"center" , justifyContent:"center", gap:5}} className="chip" onClick={() => setOpen((prev) => !prev)}>
        {selected?.icon} {selected?.label || selected}
      </button>

      {open && (
        <div className="menu">
          {options.map((option) => (
            <div
              key={option}
              className="menuItem"
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              {option.icon} {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
