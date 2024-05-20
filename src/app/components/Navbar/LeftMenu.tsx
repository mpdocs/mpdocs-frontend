import React from "react";
import { Menu } from "antd";
import Link from "next/link";
import styles from "@/app/components/Navbar/index.module.scss";
import { IMenu } from "@/utils/types";

const items = [
  {
    key: "home",
    label: (
      <Link href={"/"}>
        <span className={styles.header__logo}>Отчеты</span>
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

const LeftMenu: React.FC<IMenu> = ({ current, menu }) => {
  return <Menu onClick={menu.onClick} selectedKeys={[current]} mode={menu.mode} items={items} />;
};

export default LeftMenu;
