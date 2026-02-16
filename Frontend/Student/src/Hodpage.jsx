import React, { useState } from "react";
import HodNavbar from "./hodComponents/HodNavbar";
import HodProfile from "./hodComponents/HodProfile";
import HodApproval from "./hodComponents/HodApproval";

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
