import React from "react";
import { ReportDetail as ReportDetailType } from "@/utils/api/types";
import ReportDetail from "@/app/reports/[reportId]/components/ReportDetail";

interface PageProps {
  params: { reportId: number };
}

const getNewsDetail = async (id: number): Promise<Response> => {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reports/${id}/`);
};
const Page: React.FC<PageProps> = async ({ params }: { params: { reportId: number } }) => {
  try {
    const response = await getNewsDetail(params.reportId);
    if (response.ok) {
      const report = (await response.json()) as ReportDetailType;
      return <ReportDetail report={report} />;
    }
    return <h2 className={"title"}>Такого отчета не существует!</h2>;
  } catch (error) {
    console.log(error);
    return <h2 className={"title"}>Произошла ошибка сервера!</h2>;
  }
};

export default Page;
