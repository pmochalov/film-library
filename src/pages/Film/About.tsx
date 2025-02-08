import * as React from "react";
import { Film } from "../../@types/Film";

type DataType = Pick<
    Film,
    | "year"
    | "ratingKinopoisk"
    | "ratingMpaa"
    | "ratingAgeLimits"
    | "ratingAgeLimits"
    | "filmLength"
    | "webUrl"
>;

type AboutProps = {
    data: DataType;
};

const About: React.FC<AboutProps> = ({ data }) => {
    const items = [
        { title: "Год", desc: data.year },
        { title: "Рейтинг на Кинопоиске", desc: data.ratingKinopoisk },
        { title: "Рейтинг MPAA", desc: data.ratingMpaa },
        { title: "Возраст", desc: data.ratingAgeLimits },
        { title: "Время, мин", desc: data.filmLength },
        {
            title: "Кинопоиск URL",
            desc: (
                <a href={data.webUrl} target='_blank'>
                    {data.webUrl}
                </a>
            ),
        },
    ];

    return (
        <div className='flex flex-col gap-3'>
            {items.map((item, index) => (
                <AboutItem key={index} title={item.title} desc={item.desc} />
            ))}
        </div>
    );
};

type AboutItemProps = {
    title: string;
    desc: React.ReactNode;
};

const AboutItem: React.FC<AboutItemProps> = ({ title, desc }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-[320px_1fr]'>
            <div className='text-sm text-gray-500'>{title}</div>
            <div className='overflow-x-hidden'>{desc ?? "—"}</div>
        </div>
    );
};

export { About };
