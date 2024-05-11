"use client";
import React from "react";
import isAuth from "@/app/auth/isAuth";
import ReportForm from "@/app/components/ReportForm";

const Page = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <ReportForm />
      {/*   FIXME: сюда положим список заполненных отчетов и форму заполнения нового если он еще не заполнен */}
    </section>
  );
};

export default isAuth(Page);
