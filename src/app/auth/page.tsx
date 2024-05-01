import React from "react";
import AuthForm from "@/app/components/AuthForm";

const Page = () => {
  return (
    // fixme: тут был какой-то конченый стиль, который не выдерживает добавление контента
    <section className="flex flex-col justify-center items-center">
      <AuthForm />
    </section>
  );
};

export default Page;
