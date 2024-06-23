"use client";
import React from "react";
import isAuth from "@/app/auth/isAuth";
import ReportsDashboard from "@/app/components/ReportsDashboard";

const Page = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <ReportsDashboard />
    </section>
  );
};

export default isAuth(Page);
