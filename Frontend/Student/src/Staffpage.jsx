import React, { useState } from "react";
import StafNavbar from "./StafComponents/StafNavbar";
import StafProfile from "./StafComponents/StafProfile";
import StafApproval from "./StafComponents/StafApproval";

function Staffpage() {

  const [activePage, setActivePage] = useState("profile");

  return (
    <div className="stafContainer">

      <StafNavbar setActivePage={setActivePage} />

      {activePage === "profile" && <StafProfile />}
      {activePage === "approval" && <StafApproval />}

    </div>
  );
}

export default Staffpage;
