import Navbar from "@/components/navbar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
