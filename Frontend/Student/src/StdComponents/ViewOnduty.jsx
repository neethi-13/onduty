import React, { useEffect, useState } from "react";
import axios from "axios";

function ViewOnduty() {

  const student = JSON.parse(localStorage.getItem("student"));
  const [odList, setOdList] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/od/${student.reg}`)
      .then((res) => {
        setOdList(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="stdsCard">
      <h3>My OnDuty Records</h3>

      {odList.map((od) => (
        <div key={od.oid} className="stdsOdItem">
          <p><b>Reason:</b> {od.reason}</p>
          <p><b>From:</b> {od.fromdate}</p>
          <p><b>To:</b> {od.todate}</p>
          <p><b>Days:</b> {od.days}</p>

          <p><b>Class Atvisor Approved:</b> {od.clsaApproved ? "Yes" : "No"}</p>
          <p><b>Mentor Approved:</b> {od.mentorApproved ? "Yes" : "No"}</p>
          <p><b>HOD Approved:</b> {od.hodApproved ? "Yes" : "No"}</p>

          <p><b>Status:</b> {od.status}</p>
        </div>
      ))}

    </div>
  );
}

export default ViewOnduty;
