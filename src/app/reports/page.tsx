"use client";
import React, { useState } from "react";
import isAuth from "@/app/auth/isAuth";
import ReportForm from "@/app/components/ReportForm";
import { SubmitHandler } from "react-hook-form";
import { defaultValues, ReportFormValues } from "@/app/components/ReportForm/types";
import api from "@/utils/api";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [resetForm, setResetForm] = useState<() => void>(() => {});

  const sendReport: SubmitHandler<ReportFormValues> = async (data) => {
    api
      .post("/reports/", data)
      .then((resp) => {
        resetForm();
        router.push(`/reports/${resp.data.id}`);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <section>
      <ReportForm initialData={defaultValues} onSubmit={sendReport} setResetForm={setResetForm} />
      {/*   FIXME: сюда положим список заполненных отчетов и форму заполнения нового если он еще не заполнен */}
    </section>
  );
};

export default isAuth(Page);
