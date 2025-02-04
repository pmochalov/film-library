import * as React from "react";

import { Spinner } from "../../widgets/ui/Spinner";
import { useGetVideosQuery } from "./api/VideosApi";

type VideosProps = {
    kinopoiskId: number;
};

const Videos: React.FC<VideosProps> = ({ kinopoiskId }) => {
    const { data, error, isLoading } = useGetVideosQuery(kinopoiskId);

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
        <div className='grid grid-cols-1 gap-2 md:gap-3'>
            {data.items &&
                data.items.map((item, index) => {
                    return (
                        <div
                            className='p-4 md:px-8 md:py-5 bg-slate-100'
                            key={index}
                        >
                            <h3 className='font-semibold'>{item.name}</h3>
                            <div>
                                <a href={`${item.url}`} target='_blank'>
                                    {item.url}
                                </a>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export { Videos };
