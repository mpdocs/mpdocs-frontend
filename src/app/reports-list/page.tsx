"use client";
import React from "react";
import isAuth from "@/app/auth/isAuth";
import Reports from "@/app/components/Reports";

const Page = () => {
  return (
    <section>
      <Reports />
    </section>
  );
};

export default isAuth(Page);
