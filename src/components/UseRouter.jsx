"use client";  // all components are server side components by default then use this to make it client side.
import React from "react";
import { useRouter } from "next/navigation";
function UseRouter() {
  const router = useRouter();

  return (
    <>
      <div>Learn how to use navigation to specific path using useRouter</div>
      <button type="button" onClick={() => router.push("/admin/profile/")}>
        Click me to navigate user profile
      </button>
    </>
  );
}

export default UseRouter;
