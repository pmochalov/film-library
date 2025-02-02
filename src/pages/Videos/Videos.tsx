import * as React from "react";

import { RootState } from "../../app/store";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchVideos, resetVideoState } from "../../features/videosSlice";
import { H2 } from "../../UI/H2";

type VideosProps = {
    kinopoiskId: number;
};

const Videos: React.FC<VideosProps> = ({ kinopoiskId }) => {
    const dispatch = useAppDispatch();

    const { data, loading, error } = useAppSelector(
        (state: RootState) => state.videos
    );

    React.useEffect(() => {
        if (kinopoiskId) {
            dispatch(fetchVideos({ id: kinopoiskId }));
        }

        return () => {
            dispatch(resetVideoState());
        };
    }, [dispatch, kinopoiskId]);

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    if (loading) {
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
