type ItemCollection = {
    title: string;
    value: string;
    bgColor: string;
};

export const menuCollectionData: ItemCollection[] = [
    {
        title: "Самые популярные",
        value: "TOP_POPULAR_ALL",
        bgColor: "bg-gradient-to-r from-gray-600 to-orange-500",
    },
    {
        title: "Топ популярных фильмов",
        value: "TOP_POPULAR_MOVIES",
        bgColor: "bg-gradient-to-r from-green-600 to-yellow-500",
    },
    {
        title: "Топ 250 ТВ-шоу",
        value: "TOP_250_TV_SHOWS",
        bgColor: "bg-gradient-to-r from-teal-400 to-blue-500",
    },
    {
        title: "Топ 250 фильмов",
        value: "TOP_250_MOVIES",
        bgColor: "bg-gradient-to-r from-purple-500 to-blue-500",
    },
    {
        title: "Фильмы про вампиров",
        value: "VAMPIRE_THEME",
        bgColor: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
    {
        title: "Лучшие фильмы, основанные на комиксах",
        value: "COMICS_THEME",
        bgColor:
            "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%",
    },
];
