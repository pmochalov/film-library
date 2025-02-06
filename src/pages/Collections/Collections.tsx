import * as React from "react";

import { Link, useSearchParams } from "react-router-dom";
import { H1 } from "../../shared/ui/H1/H1";
import { menuCollectionData } from "../../data";
import { useGetCollectionQuery } from "./api/CollectionApi";
import { Spinner } from "../../widgets/ui/Spinner";
import { H3 } from "../../shared/ui/H3/H3";
import { FilmCard } from "../../shared/ui/FilmCard/FilmCard";

const TITLE_STYLES =
    "px-3 py-1 font-semibold leading-snug text-white bg-gray-900 group-hover:text-gray-900 group-hover:bg-white md:py-2 lg:px-4 lg:py-3 box-decoration-clone lg:leading-relaxed";

const Collections: React.FC = () => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page") ?? "1";
    const type = searchParams.get("type");

    const currCollection =
        menuCollectionData.find((c) => c.value === type) ??
        menuCollectionData[0];

    const title = (
        <span className={TITLE_STYLES}>
            {currCollection.title} {currCollection.emodji}
        </span>
    );

    const { data, error, isLoading } = useGetCollectionQuery({
        type: currCollection.value,
        page,
    });

    if (error) {
        // return <ErrorMessage error={error} />;
    }

    if (isLoading || !data) {
        return <Spinner />;
    }

    const renderFilmList = () => (
        <div className='flex flex-col gap-2'>
            {data.items?.map((item, index) => (
                <FilmCard film={item} key={index} />
            ))}
        </div>
    );

    const renderRatingsMenu = () => (
        <nav className='flex flex-col gap-2 p-3 bg-slate-100'>
            {menuCollectionData.map((item) => {
                const isCurrent = currCollection.value === item.value;

                return (
                    <Link
                        to={`/collection/?type=${item.value}`}
                        className={`px-3 py-1 ${isCurrent && "font-semibold"}`}
                        key={item.value}
                    >
                        {item.title} {isCurrent && `${item.emodji}`}
                    </Link>
                );
            })}
        </nav>
    );

    return (
        <div className='grid grid-cols-1 gap-2 md:gap-2'>
            <div className='grid grid-cols-[1fr_320px] gap-8'>
                <div>
                    <div
                        className={`aspect-[2/1] md:aspect-[3/1] ${currCollection.bgColor} flex p-2 md:p-4 items-center justify-start`}
                    >
                        <H1 title={title} />
                    </div>
                    {renderFilmList()}
                </div>

                <div>
                    <H3 title={"Рейтинги"} />
                    {renderRatingsMenu()}
                </div>
            </div>
        </div>
    );
};

export { Collections };
