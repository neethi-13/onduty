import React, { useState } from "react";
import StafMentorStd from "./StafMentorStd";
import StafClassStd from "./StafClassStd";

function StafApproval() {

  const [viewType, setViewType] = useState("mentor");

  return (
    <div className="stafCard">

      <h3>Approval Section</h3>

      <div className="stafApprovalBtns">
        <button onClick={() => setViewType("mentor")}>
          Mentor Approval
        </button>

        <button onClick={() => setViewType("class")}>
          Class Approval
        </button>
      </div>

      {viewType === "mentor" && <StafMentorStd />}
      {viewType === "class" && <StafClassStd />}

    </div>
  );
}

export default StafApproval;
