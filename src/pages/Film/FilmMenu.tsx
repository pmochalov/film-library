import * as React from "react";
import { Link } from "react-router-dom";

const data = [
    {
        hash: "",
        title: "Описание",
    },
    {
        hash: "#videos",
        title: "Трейлеры",
    },
    {
        hash: "#images",
        title: "Фото",
    },
    {
        hash: "#facts",
        title: "Факты",
    },
    {
        hash: "#external_sources",
        title: "Где смотреть",
    },
];

type FilmMenuProps = {
    hash: string;
};

const FilmMenu: React.FC<FilmMenuProps> = ({ hash }) => {
    return (
        <nav className='flex flex-row gap-3 border-b-2 border-slate-200'>
            {data.map((item, index) => {
                const itemClass =
                    hash === item.hash
                        ? "py-3 px-4 bg-slate-200 font-semibold"
                        : "py-3 px-4";

                return (
                    <Link
                        className={itemClass}
                        to={`./${item.hash}`}
                        key={index}
                    >
                        {item.title}
                    </Link>
                );
            })}
        </nav>
    );
};

export { FilmMenu };
