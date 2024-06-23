import React from "react";
import { Card } from "antd";
import { Report } from "../../types";
import styles from "./index.module.scss";
interface ReportsListProps {
  sortedReports: Report[];
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toISOString().replace("T", " ").substring(0, 19);
};

const ReportsList: React.FC<ReportsListProps> = ({ sortedReports }) => {
  return (
    <div className={styles.wrapper}>
      {sortedReports.map((report, index) => (
        <Card className={styles.card} key={index} title={report.template.name}>
          <div>
            <h3>User</h3>
            <p>
              Name: {report.user.first_name} {report.user.last_name}, Username: {report.user.username}
            </p>
          </div>
          <div>
            <h3>Status</h3>
            <p>
              Is Reviewed:{" "}
              {report.is_reviewed ? (
                <span className={styles.statusTrue}>Yes</span>
              ) : (
                <span className={styles.statusFalse}>No</span>
              )}
            </p>
          </div>
          <div>
            <h3>Timestamps</h3>
            <p>
              Created At: <span>{formatDate(report.created_at)}</span>
            </p>
            <p>
              Updated At: <span>{formatDate(report.updated_at)}</span>
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ReportsList;
