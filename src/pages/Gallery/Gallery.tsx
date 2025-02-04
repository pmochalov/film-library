import * as React from "react";

import { Spinner } from "../../widgets/ui/Spinner";

import { useGetGalleryQuery } from "./api/GalleryApi";

type GalleryProps = {
    kinopoiskId: number;
};

const Gallery: React.FC<GalleryProps> = ({ kinopoiskId }) => {
    const { data, error, isLoading } = useGetGalleryQuery(kinopoiskId);

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
