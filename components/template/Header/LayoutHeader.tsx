import React from "react";
import Header from "./Header";
import MobileNavbar from "./MobileNavbar";

function LayoutHeader({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-56px-56px)]">{children}</main>
      <MobileNavbar />
    </>
  );
}

export default LayoutHeader;
