import React from 'react';
import ReportForm from "../components/ReportForm";

const Page = () => {
    return (
            // fixme: какой-то конченый стиль, который не выдерживает добавление контента
            <section className="flex flex-col justify-center items-center">
                <ReportForm/>
            </section>
    );
};

export default Page;