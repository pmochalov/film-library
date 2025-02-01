import * as React from "react";
import { useParams } from "react-router-dom";

import { RootState } from "../app/store";
import { fetchFilm, resetFilmState } from "../features/film/filmSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Genre } from "../@types";
import { H1 } from "../UI/H1";
import { H2 } from "../UI/H2";

type GenresProps = {
    items: Genre[] | null;
};

const Genres: React.FC<GenresProps> = ({ items }) => {
    if (!items) {
        return <></>;
    }

    return (
        <div className='flex gap-2'>
            {items.map((g, i) => (
                <span
                    className='px-2 py-1 text-sm text-white bg-gray-500'
                    key={i}
                >
                    {g.genre}
                </span>
            ))}
        </div>
    );
};

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
        <>
            <H1 title={data.nameRu} />

            <div>
                <span>Год: {data.year}</span>
                <span>Рейтинг: {data.ratingKinopoisk}</span>
            </div>

            {data.genres && <Genres items={data.genres} />}

            <div className='grid gap-2 md:gap-4 grid-cols-1fr md:grid-cols-[400px_1fr]'>
                <div className='bg-slate-300'>
                    <img
                        src={data.posterUrl}
                        className='w-56 h-auto md:w-auto md:h-auto'
                    />
                </div>
                <div>
                    <H2 title={"О фильме"} />
                    {data.description}
                </div>
            </div>

            <div></div>
        </>
    );
};

export { Film };
