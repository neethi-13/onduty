import React, { useEffect, useState } from "react";
import axios from "axios";

function StafClassStd() {

  const staff = JSON.parse(localStorage.getItem("staff"));
  const [odList, setOdList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/od")
      .then(res => {
        const filtered = res.data.filter(
          od =>
            od.cls === staff.clsa &&
            od.dept === staff.dept
        );
        setOdList(filtered);
      })
      .catch(err => console.log(err));
  }, []);

  const handleApprove = async (od) => {

    const updatedOd = {
      ...od,
      clsaApproved: true,
      status: od.mentorApproved ? "WAITING FOR HOD" : "CLSA APPROVED"
    };

    await axios.put("http://localhost:8080/od", updatedOd);
    alert("Class Approved ✅");
    window.location.reload();
  };

  const handleReject = async (od) => {

    const updatedOd = {
      ...od,
      status: "REJECTED",
      mentorApproved: false,
      clsaApproved: false,
      hodApproved: false
    };

    await axios.put("http://localhost:8080/od", updatedOd);
    alert("Rejected ❌");
    window.location.reload();
  };

  return (
    <div>

      <h4>Class Approval Requests</h4>

      {odList.map((od) => (
        <div key={od.oid} className="stafStdCard">

          <p><b>Name:</b> {od.name}</p>
          <p><b>Reg:</b> {od.reg}</p>
          <p><b>Reason:</b> {od.reason}</p>
          <p><b>Status:</b> {od.status}</p>

          {od.status !== "APPROVED" && od.status !== "REJECTED" && (
            <>
              <button onClick={() => handleApprove(od)}>
                Approve
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

export default StafClassStd;
