import React from "react";

function StafNavbar({ setActivePage }) {

  const staff = JSON.parse(localStorage.getItem("staff"));

  return (
    <div className="stafNavbar">

      <h2 className="stafTitle">Welcome {staff.name}</h2>

      <div className="stafNavButtons">
        <button onClick={() => setActivePage("profile")}>
          Profile
        </button>

        <button onClick={() => setActivePage("approval")}>
          Approval
        </button>
      </div>

    </div>
  );
}

export default StafNavbar;
