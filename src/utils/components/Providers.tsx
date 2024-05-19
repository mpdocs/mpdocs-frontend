"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/utils/store";
import { ConfigProvider } from "antd";
import { Content } from "antd/es/layout/layout";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ConfigProvider>
        <Content>{children}</Content>
      </ConfigProvider>
    </Provider>
  );
}
