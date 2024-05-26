import React, { useEffect } from "react";
import { Button, Menu, MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { refreshUserData } from "@/utils/auth/thunk";
import { useAppDispatch } from "@/utils/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/store";
import Link from "next/link";
import { IMenu } from "@/utils/types";
import styles from "./index.module.scss";
import { useRouter } from "next/navigation";

const RightMenu: React.FC<IMenu> = ({ current, menu }) => {
  const dispatch = useAppDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();
  const moveToAuth = () => {
    router.push("/auth");
  };
  useEffect(() => {
    dispatch(refreshUserData());
  }, []);
  const items: MenuProps["items"] = user.id
    ? [
        {
          key: "profile",
          label: (
            <>
              <Link href="/profile" className={styles.menu__username}>{`${user.first_name} ${user.last_name}`}</Link>
              <UserOutlined />
            </>
          ),
        },
      ]
    : [
        {
          key: "login",
          label: (
            <>
              <Button onClick={moveToAuth} type="primary">
                Войти
              </Button>
            </>
          ),
        },
      ];
  return (
    <>
      <Menu onClick={menu.onClick} selectedKeys={[current]} mode={menu.mode} items={items} />
    </>
  );
};

export default RightMenu;
