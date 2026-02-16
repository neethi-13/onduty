import React, { useEffect, useState } from "react";
import axios from "axios";

function HodDeptStd() {

  const hod = JSON.parse(localStorage.getItem("hod"));
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/students/dept/${hod.dept}`)
      .then(res => setStudents(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>

      <h4>Department Students</h4>

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

export default HodDeptStd;
