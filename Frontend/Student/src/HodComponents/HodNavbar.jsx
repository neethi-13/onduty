import React from "react";

function HodNavbar({ setActive }) {

  const hod = JSON.parse(localStorage.getItem("hod"));

  return (
    <div className="hodNavbar">
      <h2 className="hodTitle">Welcome {hod.name}</h2>

      <div>
        <button onClick={() => setActive("profile")}>
          Profile
        </button>

        <button onClick={() => setActive("approval")}>
          Approval
        </button>
      </div>
    </div>
  );
}

export default HodNavbar;
