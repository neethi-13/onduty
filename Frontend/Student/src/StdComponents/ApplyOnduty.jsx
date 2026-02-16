import React, { useState } from "react";
import axios from "axios";

function ApplyOnduty() {

  const student = JSON.parse(localStorage.getItem("student"));

  const [formData, setFormData] = useState({
    name: student.name,
    reg: student.reg,
    rno: student.rno,
    gender: student.gender,
    mentorid: student.mentorid,
    dept: student.dept,
    cls: student.cls,
    per: "onduty",
    reason: "",
    certificate: false,
    days: "",
    fromdate: "",
    todate: "",
    clsaApproved: false,
    mentorApproved: false,
    hodApproved: false,
    status: "PENDING"
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`;
  };

  const submitOd = async () => {

    const formattedData = {
      ...formData,
      reg: Number(formData.reg),
      rno: Number(formData.rno),
      days: Number(formData.days),
      fromdate: formatDate(formData.fromdate),
      todate: formatDate(formData.todate)
    };

    console.log("Sending Data:", formattedData);

    try {
      await axios.post("http://localhost:8080/od", formattedData);
      alert("OnDuty Applied Successfully ✅");
    } catch (error) {
      console.log(error.response?.data);
      alert("Error Applying OnDuty ❌");
    }
  };

  return (
    <div className="stdsCard">

      <h3>Apply OnDuty</h3>

      {/* Read-only Student Info */}
      <p><b>Name:</b> {student.name}</p>
      <p><b>Register No:</b> {student.reg}</p>
      <p><b>Department:</b> {student.dept}</p>
      <p><b>Class:</b> {student.cls}</p>
      <p><b>Mentor ID:</b> {student.mentorid}</p>

      <hr />

      <input
        type="text"
        name="reason"
        placeholder="Enter Reason"
        value={formData.reason}
        onChange={handleChange}
      />

      <label>From Date:</label>
      <input
        type="date"
        name="fromdate"
        value={formData.fromdate}
        onChange={handleChange}
      />

      <label>To Date:</label>
      <input
        type="date"
        name="todate"
        value={formData.todate}
        onChange={handleChange}
      />

      <input
        type="number"
        name="days"
        placeholder="Number of Days"
        value={formData.days}
        onChange={handleChange}
      />

      <label>
        Certificate Submitted:
        <input
          type="checkbox"
          name="certificate"
          checked={formData.certificate}
          onChange={handleChange}
        />
      </label>

      <br /><br />

      <button onClick={submitOd}>
        Submit OnDuty
      </button>

    </div>
  );
}

export default ApplyOnduty;
