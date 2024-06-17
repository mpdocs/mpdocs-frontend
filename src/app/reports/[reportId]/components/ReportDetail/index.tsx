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
      <p>{report.id}</p>
    </section>
  );
};

export default ReportDetail;
