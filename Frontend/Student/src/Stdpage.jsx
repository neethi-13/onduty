import React, { useState } from "react";
// import Profile from "./StdComponents/Profile";
import Profile from "./StdComponents/Profile";
import ApplyOnduty from "./StdComponents/ApplyOnduty";
import ViewOnduty from "./StdComponents/ViewOnduty";
import StdNavbar from "./StdComponents/StdNavbar";

function Stdpage() {

  const [activePage, setActivePage] = useState("profile");

  return (
    <div className="stdsContainer">

      <StdNavbar setActivePage={setActivePage} />

      {activePage === "profile" && <Profile />}
      {activePage === "apply" && <ApplyOnduty />}
      {activePage === "view" && <ViewOnduty />}

    </div>
  );
}

export default Stdpage;
