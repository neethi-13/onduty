import React from "react";

function Profile() {

  const student = JSON.parse(localStorage.getItem("student"));

  return (
    <div className="stdsCard">
      <h3>Student Profile</h3>

      <p><b>Register No:</b> {student.reg}</p>
      <p><b>Name:</b> {student.name}</p>
      <p><b>Roll:</b> {student.roll}</p>
      <p><b>Gender:</b> {student.gender}</p>
      <p><b>DOB:</b> {student.dob}</p>
      <p><b>Branch:</b> {student.branch}</p>
      <p><b>Department:</b> {student.dept}</p>
      <p><b>Class:</b> {student.cls}</p>
      <p><b>Mentor:</b> {student.mentor}</p>
      <p><b>Mentor ID:</b> {student.mentorid}</p>
      <p><b>Email:</b> {student.mail}</p>
      <p><b>Personal Mail:</b> {student.pmail}</p>
      <p><b>Address:</b> {student.address}</p>
    </div>
  );
}

export default Profile;
