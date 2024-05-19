"use client";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/store";
import { useRouter } from "next/navigation";

export default function isAuth<P extends Record<string, unknown>>(Component: React.ComponentType<P>): React.FC<P> {
  return function IsAuth(props) {
    const user = useSelector((state: RootState) => state.auth.user);
    const router = useRouter();
    useEffect(() => {
      if (!user.id) {
        router.push("/auth");
      }
    }, []);

    if (!user.id) {
      return null;
    }

    return <Component {...props} />;
  };
}
