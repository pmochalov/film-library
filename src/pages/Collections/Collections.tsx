import * as React from "react";

import { Link, useSearchParams } from "react-router-dom";
import { H1 } from "../../shared/ui/H1";
import { menuCollectionData } from "../../data";
import { useGetCollectionQuery } from "./api/CollectionApi";
import { Spinner } from "../../widgets/ui/Spinner";
import { Country, Film, Genre } from "../../@types";

const Collections: React.FC = () => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page") ?? "1";
    const type = searchParams.get("type");

    const currCollection =
        menuCollectionData.find((c) => c.value === type) ??
        menuCollectionData[0];

    const title = (
        <span className='px-3 py-1 font-semibold leading-snug text-white bg-gray-900 group-hover:text-gray-900 group-hover:bg-white md:py-2 lg:px-4 lg:py-3 box-decoration-clone lg:leading-relaxed'>
            {currCollection.title}
        </span>
    );

    const { data, error, isLoading } = useGetCollectionQuery({
        type: currCollection.value,
        page,
    });

    if (error) {
        // return <ErrorMessage error={error} />;
    }

    if (isLoading) {
        return <Spinner />;
    }

    if (!data) {
        return <>Загрузка...</>;
    }

    return (
        <div className='grid grid-cols-1 gap-1 md:gap-2'>
            <div
                className={`aspect-[2/1] md:aspect-[3/1] ${currCollection.bgColor} flex p-2 md:p-4 items-center justify-start`}
            >
                <H1 title={title} />
            </div>

            <div className='flex flex-col gap-2'>
                {data.items &&
                    data.items.map((item, index) => {
                        return <FilmCard film={item} key={index} />;
                    })}
            </div>
        </div>
    );
};

type FilmCardProps = {
    film: Film;
};

const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
    return (
        <Link
            to={`/film/${film.kinopoiskId}`}
            className='grid grid-cols-1 md:grid-cols-[164px_1fr_1fr] md:grid-rows-1 gap-4 p-4 bg-slate-100'
        >
            <div>
                <img src={film.posterUrlPreview} className='w-full h-auto' />
            </div>
            <div className='flex flex-col gap-2'>
                <h3 className='text-lg font-semibold text-gray-900'>
                    {film.nameRu}
                </h3>
                <div className='flex flex-col gap-1 text-gray-600'>
                    <div>
                        {film.year ? `${film.year}, ` : ""}{" "}
                        {film.countries ? getCountriesStr(film.countries) : ""}
                    </div>
                    <div>{film.genres ? getGenrestStr(film.genres) : ""} </div>
                </div>
            </div>
            <div className='flex items-start justify-start md:justify-end'>
                {film.ratingKinopoisk && (
                    <span className='px-2 py-1 font-bold text-gray-900 bg-orange-400'>
                        {film.ratingKinopoisk}
                    </span>
                )}
            </div>
        </Link>
    );
};

function getGenrestStr(genres: Genre[]): string {
    return genres.length > 0 ? genres.map((g) => g.genre).join(", ") : "";
}

function getCountriesStr(countries: Country[]): string {
    return countries.length > 0
        ? countries.map((c) => c.country).join(", ")
        : "";
}

export { Collections };
