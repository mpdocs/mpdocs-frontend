import React from "react";
import { Menu, MenuProps } from "antd";
import Link from "next/link";
import styles from "@/app/components/Navbar/index.module.scss";
import { IMenu } from "@/utils/types";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/store";

const LeftMenu: React.FC<IMenu> = ({ current, menu }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const items: MenuProps["items"] = !user.is_staff
    ? [
        {
          key: "home",
          label: (
            <Link href={"/"}>
              <span className={styles.header__logo}>Отчеты</span>
            </Link>
          ),
        },
        {
          key: "create_report",
          label: <Link href="/reports/create">Заполнить</Link>,
        },
        {
          key: "report_list",
          label: <Link href="/reports">Смотреть</Link>,
        },
      ]
    : [
        {
          key: "home",
          label: (
            <Link href={"/"}>
              <span className={styles.header__logo}>Отчеты</span>
            </Link>
          ),
        },
        {
          key: "create_report",
          label: <Link href="/reports/create">Заполнить</Link>,
        },
        {
          key: "report_list",
          label: <Link href="/reports">Смотреть</Link>,
        },
        {
          key: "download_stats",
          label: (
            <Link href={`${process.env.NEXT_PUBLIC_API_URL}/reports/stats/generate/`} target="_blank">
              Скачать статистику
            </Link>
          ),
        },
      ];

  return <Menu onClick={menu.onClick} selectedKeys={[current]} mode={menu.mode} items={items} />;
};

export default LeftMenu;
