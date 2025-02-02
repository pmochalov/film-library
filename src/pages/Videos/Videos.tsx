import * as React from "react";

import { RootState } from "../../app/store";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchVideos, resetVideoState } from "../../features/videosSlice";

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
        <div>
            <div className='grid grid-cols-1 gap-4'>
                {data.items &&
                    data.items.map((item, index) => {
                        return <div key={index}>{item.url}</div>;
                    })}
            </div>
        </div>
    );
};

export { Videos };
