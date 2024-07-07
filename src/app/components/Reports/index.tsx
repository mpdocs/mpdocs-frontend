"use client";
import { Button, Dropdown, Input, MenuProps, Spin } from "antd";
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { ArrowDownOutlined, ArrowUpOutlined, DownOutlined } from "@ant-design/icons";
import ReportsList from "./components/ReportsList";
import api from "@/utils/api";
import { Report } from "@/app/components/Reports/types";

const items: MenuProps["items"] = [
  {
    label: "От старых к новым",
    key: "1",
    icon: <ArrowUpOutlined />,
  },
  {
    label: "От новых к старым",
    key: "2",
    icon: <ArrowDownOutlined />,
  },
];

const Reports = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [sortedReports, setSortedReports] = useState(reports);
  const [sortLabel, setSortLabel] = useState("Сортировать");

  const getReportsData = async () => {
    try {
      const response = await api.get("/reports/");
      setReports(response.data);
      setSortedReports(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getReportsData();
  }, []);

  useEffect(() => {
    setSortedReports(reports);
  }, [reports]);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    const sorted = [...reports].sort((a, b) => new Date(a.updated_at).getTime() - new Date(b.created_at).getTime());
    setSortLabel("От старых к новым");

    if (e.key === "2") {
      sorted.reverse();
      setSortLabel("От новых к старым");
    }
    setSortedReports(sorted);
  };

  const handleSearch = (value: string) => {
    const filteredReports = [...reports].filter((report) =>
      report.template.name.toLowerCase().includes(value.trim().toLowerCase()),
    );

    setSortedReports(filteredReports);
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  if (reports.length === 0) {
    return <Spin className="root"></Spin>;
  }

  return (
    <>
      <div className={styles.toolbar}>
        <Input
          className={styles.searchInput}
          placeholder="Введите название шаблона"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
        <Dropdown menu={menuProps}>
          <Button className={styles.dropdown__button}>
            <span>{sortLabel}</span>
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      <ReportsList sortedReports={sortedReports} />
    </>
  );
};

export default Reports;
