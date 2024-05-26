"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/utils/hooks/useAppDispatch";
import { login } from "@/utils/auth/thunk";
import { Controller, useForm } from "react-hook-form";
import { Alert, Button, Form, Input } from "antd";
import styles from "./index.module.scss";
import FormItem from "antd/es/form/FormItem";
import Label from "@/app/components/Label";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/store";

interface FormInputs {
  username: string;
  password: string;
}

const AuthForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.user);
  useEffect(() => {
    if (user.id) {
      router.push("/");
    }
  }, []);

  const {
    handleSubmit,
    setError,
    control,
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
    <Form onFinish={handleSubmit(onSubmit)} className={styles.form}>
      <FormItem className={styles.label}>
        <Label htmlFor="username">Логин:</Label>
        <Controller
          name="username"
          defaultValue=""
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input onChange={onChange} value={value} onBlur={onBlur} />
          )}
        />
      </FormItem>
      <FormItem className={styles.label}>
        <Label htmlFor="password">Пароль:</Label>
        <Controller
          name="password"
          defaultValue=""
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input onChange={onChange} value={value} onBlur={onBlur} type="password" />
          )}
        />
      </FormItem>
      {errors.root && <Alert message={errors.root.message} showIcon />}
      <Button type="primary" htmlType="submit" disabled={isLoading}>
        {isLoading ? "Загрузка..." : "Войти"}
      </Button>
    </Form>
  );
};

export default AuthForm;
