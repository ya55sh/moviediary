import { useState } from "react";

export default function Listing({ children }) {
  const [open, setOpen] = useState(true);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <div className="listing">
      <button className="btnList" onClick={handleClick}>
        {open ? "➖" : "➕"}
      </button>
      {open && children}
    </div>
  );
}
