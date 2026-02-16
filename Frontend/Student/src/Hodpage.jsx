import React, { useState } from "react";
import HodNavbar from "./HodComponents/HodNavbar";
import HodProfile from "./HodComponents/HodProfile";
import HodApproval from "./HodComponents/HodApproval";

function Hodpage() {

  const [active, setActive] = useState("profile");

  return (
    <div className="hodContainer">

      <HodNavbar setActive={setActive} />

      {active === "profile" && <HodProfile />}
      {active === "approval" && <HodApproval />}

    </div>
  );
}

export default Hodpage;
