import React from "react";
import { Menu } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

const RightMenu = ({ mode }) => {
  return (
    <Menu mode={mode}>
      <Menu.SubMenu
        title={
          <>
            <span className="username">John Doe</span>
          </>
        }
      >
        <Menu.Item key="about-us">
          <UserOutlined />
          <span>Profile</span>
        </Menu.Item>
        <Menu.Item key="log-out">
          <LogoutOutlined />
          <span>Logout</span>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default RightMenu;
