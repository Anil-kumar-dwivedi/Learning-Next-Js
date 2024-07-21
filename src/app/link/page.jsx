import React from "react";
import Link from "next/link";
function LinkTest() {
    const id = 5
  return (
    <>
      <div>Link/navigate</div>
      
      <Link href="/admin/dashboard/">Click to navigate admin dashboard</Link>
      <hr/>
      <div>Dynamic navigation</div>
      <Link href={`/user/profile/${id}`}>CLick to navigate to users profile</Link>
    </>
  );
}

export default LinkTest;
