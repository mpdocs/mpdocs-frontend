"use client";
import React, { useEffect, useState } from "react";
import { Button, Drawer } from "antd";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { MenuOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";
import { Header } from "antd/lib/layout/layout";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <Header className={styles.navbar}>
      <div className={styles.nav__header}>
        <Link href={"/"}>
          <h3 className={styles.brand_font_mobile}>Отчеты</h3>
        </Link>
        <div className={styles.navbar__menu}>
          <div className={styles.leftMenu}>
            <LeftMenu mode={"horizontal"} />
          </div>
          <Button className={styles.menuButton} type="text" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <div className={styles.rightMenu}>
            <RightMenu mode={"horizontal"} />
          </div>
          <Drawer
            title={"Отчеты"}
            onClose={showDrawer}
            placement="right"
            closable={true}
            style={{ zIndex: 99999 }}
            open={open}
          >
            <LeftMenu mode={"inline"} />
            <RightMenu mode={"inline"} />
          </Drawer>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
