import React, { useEffect } from "react";
import { Menu, MenuProps } from "antd";
import { UserOutlined, LogoutOutlined, AppstoreOutlined } from "@ant-design/icons";
import { logout, refreshUserData } from "@/utils/auth/thunk";
import { useAppDispatch } from "@/utils/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/store";
import { getAccessToken } from "@/utils/api/tokens";

type MenuItem = Required<MenuProps>["items"][number];

const RightMenu: React.FC<MenuProps> = ({ mode }) => {
  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const onLogout = () => {
    dispatch(logout());
  };
  useEffect(() => {
    dispatch(refreshUserData());
  }, []);
  const items: MenuItem[] = [
    {
      key: "SubMenu",
      label: (
        <>
          {getAccessToken() ? <AppstoreOutlined /> : ""}
          <span>{`${user.first_name} ${user.last_name} `}</span>
        </>
      ),
      children: [
        {
          key: "profile",
          icon: <UserOutlined />,
          label: "Профиль",
        },
        {
          key: "logout",
          danger: true,
          icon: <LogoutOutlined />,
          onClick: onLogout,
          label: "Выйти",
        },
      ],
    },
  ];
  return <Menu mode={mode} items={items} />;
};

export default RightMenu;
