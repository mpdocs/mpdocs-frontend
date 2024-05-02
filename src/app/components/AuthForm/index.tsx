"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/utils/hooks/useAppDispatch";
import { login } from "@/utils/auth/thunk";
import { useForm } from "react-hook-form";
import { Button, Input } from "antd";

interface FormInputs {
  username: string;
  password: string;
}

const AuthForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormInputs>();
  const dispatch = useAppDispatch();

  const onSubmit = async ({ username, password }: FormInputs) => {
    setIsLoading(true);
    dispatch(login({ username, password }))
      .then((response) => {
        if (response.meta.requestStatus === "fulfilled") {
          router.push("/");
        } else {
          setError("root", { message: "Неверный логин или пароль!" });
        }
      })
      .catch(() => {
        setError("root", { message: "Произошла неизвестная ошибка!" });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl p-5 flex flex-col justify-center items-center gap-6"
    >
      <label className="flex-col gap-1 w-full">
        <span className="text-black text-lg block font-bold">Логин:</span>
        <Input
          type="text"
          {...register("username", {
            required: "Обязательное поле",
          })}
          placeholder={"Введите ваш логин"}
        />
      </label>
      <label className="flex-col gap-1 w-full">
        <span className="text-black text-lg block font-bold">Пароль:</span>
        <Input
          type="password"
          {...register("password", {
            required: true,
          })}
          placeholder={"Введите ваш пароль"}
        />
      </label>
      {errors.root && <p className="text-red-600">{errors.root.message}</p>}
      <Button htmlType="submit" disabled={isLoading}>
        {isLoading ? "Загрузка..." : "Войти"}
      </Button>
    </form>
  );
};

export default AuthForm;
