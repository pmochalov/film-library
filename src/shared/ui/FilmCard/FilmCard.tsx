import * as React from "react";
import { Country, Film, Genre } from "../../../@types/Film";
import { Link } from "react-router-dom";
import { RatingBadge } from "../RatingBadge/RatingBadge";

function getGenrestStr(genres: Genre[]): string {
    return genres.length > 0 ? genres.map((g) => g.genre).join(", ") : "";
}

function getCountriesStr(countries: Country[]): string {
    return countries.length > 0
        ? countries.map((c) => c.country).join(", ")
        : "";
}

type FilmCardProps = {
    film: Film;
};

const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
    return (
        <Link
            to={`/film/${film.kinopoiskId}`}
            className='grid grid-cols-1 md:grid-cols-[164px_1fr_1fr] md:grid-rows-1 gap-4 p-4 bg-slate-100 hover:bg-slate-200'
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
                    <RatingBadge value={film.ratingKinopoisk} />
                )}
            </div>
        </Link>
    );
};

export { FilmCard };
