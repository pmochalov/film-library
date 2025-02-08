import * as React from "react";
import { useLocation, useParams } from "react-router-dom";

import { useGetFilmQuery } from "./api/FilmApi";

import { H1 } from "../../shared/ui/H1/H1";
import { Genres } from "./Genres";
import { Slogan } from "./Slogan";
import { Description } from "./Description";
import { RatingBadge } from "../../shared/ui/RatingBadge/RatingBadge";
import { About } from "./About";
import { Images } from "../Images/Images";
import { FilmMenu } from "./FilmMenu";
import { Facts } from "../Facts/Facts";
import { Videos } from "../Videos/Videos";
import { ResourcesF } from "../Resources/ResourcesF";
import { Spinner } from "../../widgets/ui/Spinner";
import { Film } from "../../@types/Film";

type FilmParams = {
    filmId?: string;
};

const FilmIndex: React.FC = () => {
    const { filmId } = useParams<FilmParams>();

    const { hash } = useLocation();

    const { data, error, isLoading } = useGetFilmQuery(filmId ?? "") as {
        data: Film;
        error: any;
        isLoading: boolean;
    };

    if (error) {
        return <>Ошибка</>;
    }

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className='grid grid-cols-1 gap-2 md:gap-4 lg:gap-8'>
            <div className='grid gap-2 md:gap-4 lg:gap-8 grid-cols-1fr md:grid-cols-[300px_1fr]'>
                <div className='justify-self-center'>
                    <img
                        src={data.posterUrl}
                        className='w-56 h-auto md:w-auto md:h-auto'
                        alt={`${data.nameRu}`}
                    />
                </div>
                <div className='flex flex-col gap-2 md:gap-4 lg:gap-8'>
                    <H1 title={data.nameRu} />

                    <div className='flex flex-wrap gap-4'>
                        <Genres items={data.genres} />{" "}
                        <RatingBadge value={data.ratingKinopoisk} />
                    </div>

                    <Slogan text={data.slogan} />

                    <Description text={data.description} />

                    <FilmMenu hash={hash} />

                    {hash === "" && <About data={data} />}

                    {hash === "#videos" && (
                        <Videos kinopoiskId={data.kinopoiskId} />
                    )}

                    {hash === "#images" && (
                        <Images kinopoiskId={data.kinopoiskId} />
                    )}

                    {hash === "#facts" && (
                        <Facts kinopoiskId={data.kinopoiskId} />
                    )}

                    {hash === "#external_sources" && (
                        <ResourcesF kinopoiskId={data.kinopoiskId} />
                    )}
                </div>
            </div>
        </div>
    );
};

export { FilmIndex };
