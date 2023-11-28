"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

function Provider() {
  return (
    <>
      <ProgressBar />
      {children}
    </>
  );
}

export default Provider;
