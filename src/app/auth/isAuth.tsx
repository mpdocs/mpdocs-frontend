"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/store";

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
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
