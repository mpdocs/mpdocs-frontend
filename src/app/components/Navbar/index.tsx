"use client";
import React, { useEffect, useState } from "react";
import { Button, Drawer } from "antd";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { MenuOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Header } from "antd/lib/layout/layout";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    setVisible(false);
  }, []);

  return (
    <Header className={styles.navbar}>
      <div className={styles.nav__header}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <h3 className={styles.brand_font}>Отчеты</h3>
          </Link>
        </div>
        <div className={styles.navbar__menu}>
          <div className={styles.leftMenu}>
            <LeftMenu mode={"horizontal"} />
          </div>
          {/* бургер */}
          <Button className={styles.menuButton} type="text" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          {/* бокова desctope */}
          <div className={styles.rightMenu}>
            <RightMenu mode={"inline"} />
          </div>
          <Drawer title={"Отчеты"} placement="right" closable={true} style={{ zIndex: 99999 }} visible={visible}>
            <LeftMenu mode={"inline"} />
            <RightMenu mode={"inline"} />
          </Drawer>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
