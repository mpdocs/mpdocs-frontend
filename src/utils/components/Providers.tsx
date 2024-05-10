"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/utils/store";
import { ConfigProvider } from "antd";
import { Content } from "antd/es/layout/layout";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00b96b",
            borderRadius: 2,
            colorBgContainer: "#f6ffed",
          },
        }}
      >
        <Content>{children}</Content>
      </ConfigProvider>
    </Provider>
  );
}
