import * as React from "react";
import { useParams } from "react-router-dom";

import { RootState } from "../../app/store";
import { fetchFilm, resetFilmState } from "../../features/film/filmSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { H1 } from "../../UI/H1";
import { H2 } from "../../UI/H2";
import { Genres } from "./Genres";
import { Slogan } from "./Slogan";
import { Description } from "./Description";

const Film: React.FC = () => {
    const { filmId } = useParams<string>();

    const dispatch = useAppDispatch();

    const { data, loading, error } = useAppSelector(
        (state: RootState) => state.film
    );

    React.useEffect(() => {
        if (filmId) {
            dispatch(fetchFilm({ id: filmId }));
        }

        return () => {
            dispatch(resetFilmState());
        };
    }, [dispatch, filmId]);

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    if (loading) {
        return <>Загрузка...</>;
    }

    return (
        <div className='grid grid-cols-1 gap-2 md:gap-4 lg:gap-8'>
            <div className='grid gap-2 md:gap-4 lg:gap-8 grid-cols-1fr md:grid-cols-[300px_1fr]'>
                <div className='justify-self-center'>
                    <img
                        src={data.posterUrl}
                        className='w-56 h-auto md:w-auto md:h-auto'
                    />
                </div>
                <div className='flex flex-col gap-2 md:gap-4 lg:gap-8'>
                    <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                        <H1
                            title={`${data.nameRu}${
                                data.year ? ` (${data.year})` : ""
                            }`}
                        />
                        <div>
                            <span className='px-2 py-1 text-xl font-bold bg-orange-400 md:text-2xl lg:text-4xl'>
                                {data.ratingKinopoisk}
                            </span>
                        </div>
                    </div>

                    <Genres items={data.genres} />

                    <Slogan text={data.slogan} />

                    <Description text={data.description} />

                    <H2 title={"Описание"} />

                    <div className='flex flex-col gap-3'>
                        <AboutItem title='Год' desc={data.year} />
                        <AboutItem
                            title='Рейтинг на Кинопоиске'
                            desc={data.ratingKinopoisk}
                        />
                        <AboutItem
                            title='Рейтинг MPAA'
                            desc={data.ratingMpaa}
                        />
                        <AboutItem
                            title='Возраст'
                            desc={data.ratingAgeLimits}
                        />
                        <AboutItem
                            title='Время'
                            desc={`${data.filmLength} мин`}
                        />
                    </div>

                    <div className=''>
                        <a href={data.webUrl}>{data.webUrl}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

type AboutItemProps = {
    title: string;
    desc: number | string | null;
};

const AboutItem: React.FC<AboutItemProps> = ({ title, desc }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-[320px_1fr]'>
            <div className='text-sm text-gray-500'>{title}</div>
            <div>{desc ?? "-"}</div>
        </div>
    );
};

export { Film };
