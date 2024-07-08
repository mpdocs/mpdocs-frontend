"use client";

import React, { useEffect, useState } from "react";
import ReportForm from "@/app/components/ReportForm";
import api from "@/utils/api";
import { SubmitHandler } from "react-hook-form";
import { ReportFormValues } from "@/app/components/ReportForm/types";
import { Spin } from "antd";
import { useRouter } from "next/navigation";

interface PageProps {
  params: { reportId: number };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const router = useRouter();
  const [reportDetail, setReportDetail] = useState<ReportFormValues | null>(null);
  const [resetForm, setResetForm] = useState<() => void>(() => {});

  const getReportDetailData = async (id: number) => {
    try {
      const response = await api.get(`/reports/${id}`);
      setReportDetail(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getReportDetailData(params.reportId);
  }, [params.reportId]);

  const updateReport: SubmitHandler<ReportFormValues> = async (data) => {
    api
      .put(`/reports/${params.reportId}/`, data)
      .then((resp) => {
        resetForm();
        router.push(`/reports/${resp.data.id}`);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  if (!reportDetail) {
    return <Spin className="root"></Spin>;
  }

  return <ReportForm initialData={reportDetail} onSubmit={updateReport} setResetForm={setResetForm} />;
};

export default Page;
