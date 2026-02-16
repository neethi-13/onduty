import React from "react";

function StafProfile() {

  const staff = JSON.parse(localStorage.getItem("staff"));

  return (
    <div className="stafCard">

      <h3>Staff Profile</h3>

      <p><b>Name:</b> {staff.name}</p>
      <p><b>Email:</b> {staff.mail}</p>
      <p><b>Department:</b> {staff.dept}</p>
      <p><b>Class Incharge:</b> {staff.clsa}</p>
      <p><b>Role:</b> {staff.role}</p>
      <p><b>DOB:</b> {staff.dob}</p>
      <p><b>Address:</b> {staff.address}</p>

    </div>
  );
}

export default StafProfile;
