import React, { useEffect, useState } from "react";
import axios from "axios";

function HodMentorStd() {

  const hod = JSON.parse(localStorage.getItem("hod"));
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/filterMid/${hod.mail}`)
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>

      <h4>Mentor Students</h4>

      {students.map((std) => (
        <div key={std.reg} className="hodStdCard">
          <p>Name: {std.name}</p>
          <p>Reg: {std.reg}</p>
          <p>Class: {std.cls}</p>
        </div>
      ))}

    </div>
  );
}

export default HodMentorStd;
