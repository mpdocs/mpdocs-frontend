"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/store";
import { logout } from "@/utils/auth/thunk";
import { Button, Descriptions, DescriptionsProps } from "antd";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/utils/hooks/useAppDispatch";
import styles from "./index.module.scss";

const Profile = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useAppDispatch();
  const onLogout = () => {
    dispatch(logout());
    router.push("/auth");
  };
  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Имя",
      children: <span>{user.first_name}</span>,
    },
    {
      key: "2",
      label: "Фамилия",
      children: <span>{user.last_name}</span>,
    },
    {
      key: "3",
      label: "Почта",
      children: <span>{user.email}</span>,
    },
    {
      key: "4",
      label: "Логин",
      children: <span>{user.username}</span>,
    },
  ];

  return (
    <div className={styles.profile}>
      <Descriptions title="Профиль" layout="vertical" items={items} />
      <Button onClick={onLogout} type="primary" danger>
        Выйти
      </Button>
    </div>
  );
};

export default Profile;
