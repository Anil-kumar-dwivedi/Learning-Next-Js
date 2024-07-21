import React from "react";

function MyProfile({ params }) {
  //dynamic routing, we have to include [] in folder naming
  console.log(params); // what ever will pass in url after profile will be captured in params
  return <div>MyProfile {params.id}</div>;
}

export default MyProfile;
