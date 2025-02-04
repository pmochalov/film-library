import * as React from "react";

import { RootState } from "../../app/store";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchGallery, resetGalleryState } from "./model/gallerySlice";
import { ErrorMessage } from "../../widgets/ui/ErrorMessage";
import { Spinner } from "../../widgets/ui/Spinner";

type GalleryProps = {
    kinopoiskId: number;
};

const Gallery: React.FC<GalleryProps> = ({ kinopoiskId }) => {
    const dispatch = useAppDispatch();

    const { data, loading, error } = useAppSelector(
        (state: RootState) => state.gallery
    );

    React.useEffect(() => {
        if (kinopoiskId) {
            dispatch(fetchGallery({ id: kinopoiskId }));
        }

        return () => {
            dispatch(resetGalleryState());
        };
    }, [dispatch, kinopoiskId]);

    if (error) {
        return <ErrorMessage error={error} />;
    }

    if (loading) {
        return <Spinner />;
    }

    return (
        <div>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3'>
                {data.items &&
                    data.items.map((item, index) => {
                        return (
                            <div key={index}>
                                <img src={item.previewUrl} />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export { Gallery };
