"use client";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import { getAccessToken } from "@/utils/api/tokens";

export default function isAuth<P extends Record<string, unknown>>(Component: React.ComponentType<P>): React.FC<P> {
  return function IsAuth(props) {
    const token = getAccessToken();
    useEffect(() => {
      if (!token) {
        return redirect("/auth");
      }
    }, []);

    if (!token) {
      return null;
    }

    return <Component {...props} />;
  };
}
