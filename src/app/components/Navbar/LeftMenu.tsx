import React from "react";
import { Menu, MenuProps } from "antd";
import Link from "next/link";

const LeftMenu: React.FC<MenuProps> = ({ mode }) => {
  return (
    <Menu mode={mode}>
      <Menu.Item key="explore">
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="features">
        <Link href="/reports">Reports</Link>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
