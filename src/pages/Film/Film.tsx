import * as React from "react";
import { useLocation, useParams } from "react-router-dom";

import { RootState } from "../../app/store";
import { fetchFilm, resetFilmState } from "./model/filmSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { H1 } from "../../shared/ui/H1";
import { Genres } from "./Genres";
import { Slogan } from "./Slogan";
import { Description } from "./Description";
import { RatingBadge } from "./RatingBadge";
import { About } from "./About";
import { Gallery } from "../Gallery/Gallery";
import { FilmMenu } from "./FilmMenu";
import { Facts } from "../Facts/Facts";
import { Videos } from "../Videos/Videos";
import { ErrorMessage } from "../../widgets/ui/ErrorMessage";
import { Spinner } from "../../widgets/ui/Spinner";
import { Resources } from "../Resources/Resources";

const Film: React.FC = () => {
    const { filmId } = useParams<string>();

    const { hash } = useLocation();

    // console.log(hash);

    const dispatch = useAppDispatch();

    const { data, loading, error } = useAppSelector(
        (state: RootState) => state.film
    );

    React.useEffect(() => {
        if (filmId) {
            dispatch(fetchFilm({ id: +filmId }));
        }

        return () => {
            dispatch(resetFilmState());
        };
    }, [dispatch, filmId]);

    if (error) {
        return <ErrorMessage error={error} />;
    }

    if (loading) {
        return <Spinner />;
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
                            <RatingBadge value={data.ratingKinopoisk} />
                        </div>
                    </div>

                    <Genres items={data.genres} />

                    <Slogan text={data.slogan} />

                    <Description text={data.description} />

                    <FilmMenu hash={hash} />

                    {hash === "" && <About data={data} />}

                    {hash === "#videos" && (
                        <Videos kinopoiskId={data.kinopoiskId} />
                    )}

                    {hash === "#images" && (
                        <Gallery kinopoiskId={data.kinopoiskId} />
                    )}

                    {hash === "#facts" && (
                        <Facts kinopoiskId={data.kinopoiskId} />
                    )}

                    {hash === "#external_sources" && (
                        <Resources kinopoiskId={data.kinopoiskId} />
                    )}
                </div>
            </div>
        </div>
    );
};

export { Film };
