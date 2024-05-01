'use client'

import React, {useState} from "react";
import {useRouter} from "next/navigation";
import {useAppDispatch} from "@/utils/hooks/useAppDispatch";
import {login} from "@/utils/auth/thunk";
import {useForm} from "react-hook-form";

type FormInputs = {
    username: string,
    password: string,
}

const AuthForm: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const router = useRouter();
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors},

    } = useForm<FormInputs>();
    const dispatch = useAppDispatch();

    const onSubmit = async ({username, password}: FormInputs) => {
        setIsLoading(true);
        dispatch(login({username, password})).then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
                router.push('/');
            } else {
                setError("root", {message: 'Неверный логин или пароль!'});
            }
        }).catch(() => {
            setError("root", {message: 'Произошла неизвестная ошибка!'});
        }).finally(() => {
            setIsLoading(false);
        });
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-xl p-5 flex flex-col justify-center items-center gap-6"
        >
            <label
                className="flex-col gap-1 w-full"
            >
                <span
                    className="text-black text-lg block font-bold"
                >
                Логин:
                </span>
                <input
                    className="text-black border-2 border-black rounded-lg p-2 w-full"
                    type="text"
                    {...register("username", {
                        required: "Обязательное поле",
                    })}
                    placeholder={"Введите ваш логин"}
                />
            </label>
            <label
                className="flex-col gap-1 w-full"
            >
                <span
                    className="text-black text-lg block font-bold"
                >
                Пароль:
                </span>
                <input
                    className="text-black border-2 border-black rounded-lg p-2 w-full"
                    type="password"

                    {...register("password", {
                        required: true,
                    })}
                    placeholder={"Введите ваш пароль"}
                />
            </label>
            {errors.root && (
                <p className="text-red-600">
                    {errors.root.message}
                </p>
            )}
            <button
                className="text-black bg-[#C2C2C2] rounded-3xl px-6 py-2"
                type={"submit"}
                disabled={isLoading}
            >
                {isLoading ? "Загрузка..." : "Войти"}
            </button>
        </form>
    );
};


export default AuthForm;