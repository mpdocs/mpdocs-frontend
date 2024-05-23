import React, { useEffect } from "react";
import { Menu, MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { refreshUserData } from "@/utils/auth/thunk";
import { useAppDispatch } from "@/utils/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/store";
import Link from "next/link";
import { IMenu } from "@/utils/types";
import styles from "./index.module.scss";

const RightMenu: React.FC<IMenu> = ({ current, menu }) => {
  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    dispatch(refreshUserData());
  }, []);
  const items: MenuProps["items"] = [
    {
      key: "profile",
      label: (
        <>
          <Link href="/profile" className={styles.menu__username}>{`${user.first_name} ${user.last_name}`}</Link>
          <UserOutlined />
        </>
      ),
    },
  ];
  return <Menu onClick={menu.onClick} selectedKeys={[current]} mode={menu.mode} items={items} />;
};

export default RightMenu;
