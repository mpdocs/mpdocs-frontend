"use client";
import React from "react";
import isAuth from "@/app/auth/isAuth";
import ReportList from "../components/ReportList";

const Page = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <ReportList />
    </section>
  );
};

export default isAuth(Page);
