import React from "react";

function HodProfile() {

  const hod = JSON.parse(localStorage.getItem("hod"));

  return (
    <div className="hodCard">

      <h3>HOD Profile</h3>

      <p><b>Name:</b> {hod.name}</p>
      <p><b>Email:</b> {hod.mail}</p>
      <p><b>Department:</b> {hod.dept}</p>
      <p><b>DOB:</b> {hod.dob}</p>

    </div>
  );
}

export default HodProfile;
