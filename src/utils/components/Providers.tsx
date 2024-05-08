"use client";

import { ReactNode, useState } from "react";
import { Provider } from "react-redux";
import { store } from "@/utils/store";
import { ConfigProvider, Switch, theme } from "antd";
import { BulbFilled, CloudFilled } from "@ant-design/icons";
import { Content, Header } from "antd/es/layout/layout";

export function Providers({ children }: { children: ReactNode }) {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleClick = () => {
    setIsDarkMode((prevValue) => !prevValue);
  };

  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        }}
      >
        <Header>
          <Switch checkedChildren={<BulbFilled />} unCheckedChildren={<CloudFilled />} onChange={handleClick} />
        </Header>
        <Content>{children}</Content>
      </ConfigProvider>
    </Provider>
  );
}
