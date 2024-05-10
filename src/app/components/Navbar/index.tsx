"use client";
import React, { useEffect, useState } from "react";
import { Layout, Button, Drawer } from "antd";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { MenuOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    setVisible(false);
  }, []);

  return (
    <nav className={styles.navbar}>
      <Layout>
        <Layout.Header className={styles.nav_header}>
          <div className={styles.logo}>
            <h3 className={styles.brand_font}>Отчеты</h3>
          </div>
          <div className={styles.navbar_menu}>
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
        </Layout.Header>
      </Layout>
    </nav>
  );
};

export default Navbar;
