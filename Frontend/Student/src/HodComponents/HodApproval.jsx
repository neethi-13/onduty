import React, { useEffect, useState } from "react";
import axios from "axios";

function HodApproval() {

  const hod = JSON.parse(localStorage.getItem("hod"));

  const [mentorStudents, setMentorStudents] = useState([]);
  const [deptStudents, setDeptStudents] = useState([]);
  const [odList, setOdList] = useState([]);

 
  const fetchData = async () => {
    try {

      // 1️⃣ Students where HOD is Mentor
      const mentorRes = await axios.get(
        `http://localhost:8080/filterMid/${hod.mail}`
      );
      setMentorStudents(mentorRes.data);

      // 2️⃣ Students in HOD Department
      const deptRes = await axios.get(
        `http://localhost:8080/students/dept/${hod.dept}`
      );
      setDeptStudents(deptRes.data);

      // 3️⃣ All OD requests
      const odRes = await axios.get("http://localhost:8080/od");
      setOdList(odRes.data);

    } catch (error) {
      console.log(error);
    }
  };

 useEffect(() => {
  fetchData();
}, []);
  // 🔹 Mentor Approval
  const handleMentorApprove = async (od) => {

    const updated = {
      ...od,
      mentorApproved: true,
      status: "MENTOR APPROVED"
    };

    await axios.put("http://localhost:8080/od", updated);

    setOdList(prev =>
      prev.map(item =>
        item.oid === od.oid ? updated : item
      )
    );
  };

  // 🔹 Final HOD Approval
  const handleHodApprove = async (od) => {

    const updated = {
      ...od,
      hodApproved: true,
      status: "HOD APPROVED"
    };

    await axios.put("http://localhost:8080/od", updated);

    setOdList(prev =>
      prev.map(item =>
        item.oid === od.oid ? updated : item
      )
    );
  };

  // 🔹 Reject
  const handleReject = async (od) => {

    const updated = {
      ...od,
      status: "REJECTED"
    };

    await axios.put("http://localhost:8080/od", updated);

    setOdList(prev =>
      prev.map(item =>
        item.oid === od.oid ? updated : item
      )
    );
  };

  // 🔥 Match OD by reg
  const mentorOd = odList.filter(od =>
    mentorStudents.some(s => s.reg === od.reg)
  );

  const deptOd = odList.filter(od =>
    deptStudents.some(s => s.reg === od.reg)
  );

  return (
    <div className="hodCard">

      <h2>Mentor Students Approval</h2>

      {mentorOd.length === 0 && <p>No Requests</p>}

      {mentorOd.map((od) => (
        <div key={od.oid} className="hodStdCard">

          <p><b>Name:</b> {od.name}</p>
          <p><b>Reason:</b> {od.reason}</p>
          <p><b>Status:</b> {od.status}</p>

          {/* Mentor Role Buttons */}
          {!od.mentorApproved && (
            <>
              <button onClick={() => handleMentorApprove(od)}>
                Approve as Mentor
              </button>

              <button onClick={() => handleReject(od)}>
                Reject
              </button>
            </>
          )}

        </div>
      ))}

      <hr />

      <h2>Department Final Approval</h2>

      {deptOd.length === 0 && <p>No Requests</p>}

      {deptOd.map((od) => (
        <div key={od.oid} className="hodStdCard">

          <p><b>Name:</b> {od.name}</p>
          <p><b>Reason:</b> {od.reason}</p>
          <p><b>Status:</b> {od.status}</p>

          {/* Final HOD Approval Buttons */}
          {od.mentorApproved &&
           od.clsaApproved &&
           !od.hodApproved && (

            <>
              <button onClick={() => handleHodApprove(od)}>
                Final Approve
              </button>

              <button onClick={() => handleReject(od)}>
                Reject
              </button>
            </>
          )}

        </div>
      ))}

    </div>
  );
}

export default HodApproval;
