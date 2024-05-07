"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/utils/store";
import { ConfigProvider, theme } from "antd";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    </Provider>
  );
}
