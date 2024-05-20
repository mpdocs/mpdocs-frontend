"use client";
import React, { useEffect, useState } from "react";
import { Button, Drawer, MenuProps } from "antd";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { MenuOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";
import { Header } from "antd/lib/layout/layout";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("mail");
  const showDrawer = () => {
    setOpen(!open);
  };

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    setOpen(false);
  }, []);
  return (
    <Header className={styles.header}>
      <nav className={styles.header__nav}>
        <Link href={"/"}>
          <h3 className={styles.header__logo_mobile}>Отчеты</h3>
        </Link>
        <div className={styles.menu}>
          <div className={styles.menu_left}>
            <LeftMenu menu={{ mode: "horizontal", onClick }} current={current} />
          </div>
          <Button className={styles.menu__button} type="text" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <div className={styles.menu_right}>
            <RightMenu menu={{ mode: "horizontal", onClick }} current={current} />
          </div>
          <Drawer
            title={"Меню"}
            onClose={showDrawer}
            placement="right"
            closable={true}
            style={{ zIndex: 99999 }}
            open={open}
          >
            <RightMenu menu={{ mode: "inline", onClick }} current={current} />
            <LeftMenu menu={{ mode: "inline", onClick }} current={current} />
          </Drawer>
        </div>
      </nav>
    </Header>
  );
};

export default Navbar;
