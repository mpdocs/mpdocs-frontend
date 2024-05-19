import React from "react";
import { Menu, MenuProps } from "antd";
import Link from "next/link";

const LeftMenu: React.FC<MenuProps> = ({ mode }) => {
  return (
    <Menu mode={mode}>
      <Menu.Item key="create-reports">
        <Link href="/reports">Создать отчет</Link>
      </Menu.Item>
      <Menu.Item key="watch-reports">
        <Link href="/reports">Смотреть отчеты</Link>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
