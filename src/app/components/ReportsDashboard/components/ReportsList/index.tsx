import React from "react";
import { Button, Card } from "antd";
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
          <p>
            ФИО: {report.user.first_name} {report.user.last_name}
          </p>
          <p>Логин: {report.user.username}</p>
          <p>
            Проверено:{" "}
            {report.is_reviewed ? (
              <span className={styles.statusTrue}>Да</span>
            ) : (
              <span className={styles.statusFalse}>Нет</span>
            )}
          </p>
          <p>
            Время создания: <span>{formatDate(report.created_at)}</span>
          </p>
          <p>
            Время обновления: <span>{formatDate(report.updated_at)}</span>
          </p>
          <div className={styles.buttons}>
            <Button type="primary">Посмотреть</Button>
            <Button type="primary" danger>
              Редакитировать
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ReportsList;
