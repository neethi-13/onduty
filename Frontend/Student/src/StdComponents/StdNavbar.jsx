import React from "react";

function StdNavbar({ setActivePage }) {
  return (
    <div className="stdsNavbar">
      <h2 className="stdsTitle">Student Dashboard</h2>

      <div className="stdsNavButtons">
        <button onClick={() => setActivePage("profile")}>Profile</button>
        <button onClick={() => setActivePage("apply")}>Apply OnDuty</button>
        <button onClick={() => setActivePage("view")}>View OnDuty</button>
      </div>
    </div>
  );
}

export default StdNavbar;
