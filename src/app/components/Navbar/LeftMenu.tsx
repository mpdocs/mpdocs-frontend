import React, { useState } from "react";
import { Menu, MenuProps } from "antd";
import Link from "next/link";
import styles from "@/app/components/Navbar/index.module.scss";

const items = [
  {
    key: "home",
    label: (
      <Link href={"/"}>
        <h3 className={styles.brand_font}>Отчеты</h3>
      </Link>
    ),
  },
  {
    key: "report_form",
    label: <Link href="/reports">Создать отчет</Link>,
  },
  {
    key: "report_list",
    label: <Link href="/reports_list">Смотреть отчеты</Link>,
  },
];

const LeftMenu: React.FC<MenuProps> = ({ mode }) => {
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode={mode} items={items} />;
};

export default LeftMenu;
