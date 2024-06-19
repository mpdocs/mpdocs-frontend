import React from "react";
import { ReportDetail as ReportDetailType } from "@/utils/api/types";
import styles from "./index.module.scss";

interface ReportDetailProps {
  report: ReportDetailType;
}

const ReportDetail: React.FC<ReportDetailProps> = ({ report }) => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>{report.template.name}</h2>
      {/* TODO: edit form will be here */}
      <p>Отчёт успешно создан!</p>
      <p>
        <a href={`${process.env.NEXT_PUBLIC_API_URL}/reports/${report.id}/generate`} target="_blank">
          Посмотреть docx
        </a>
      </p>
    </section>
  );
};

export default ReportDetail;
