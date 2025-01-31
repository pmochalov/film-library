import * as React from "react";
import { useParams } from "react-router-dom";

import { RootState } from "../app/store";
import { fetchFilm, resetFilmState } from "../features/film/filmSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Genre } from "../@types";

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
            <h1>{data.nameRu}</h1>

            {data.genres && (
                <>
                    <Genres items={data.genres} />
                </>
            )}

            <div>
                <img src={data.posterUrl} />
            </div>
        </>
    );
};

export { Film };
