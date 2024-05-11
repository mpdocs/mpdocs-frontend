"use client";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/store";

export default function isAuth<P extends Record<string, unknown>>(Component: React.ComponentType<P>): React.FC<P> {
  return function IsAuth(props) {
    const user = useSelector((state: RootState) => state.auth.user);
    useEffect(() => {
      if (!user.id) {
        return redirect("/auth");
      }
    }, []);

    if (!user.id) {
      return null;
    }

    return <Component {...props} />;
  };
}
