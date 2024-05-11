import React from "react";
import { Menu } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { logout } from "@/utils/auth/thunk";
import { useAppDispatch } from "@/utils/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/store";

const RightMenu = ({ mode }) => {
  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <Menu mode={mode}>
      <Menu.SubMenu
        title={
          <>
            <span className="username">{`${user.first_name} ${user.last_name}`}</span>
          </>
        }
      >
        <Menu.Item key="about-us">
          <UserOutlined />
          <span>Профиль</span>
        </Menu.Item>
        <Menu.Item key="log-out" onClick={onLogout}>
          <LogoutOutlined />
          <span>Выйти</span>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default RightMenu;
