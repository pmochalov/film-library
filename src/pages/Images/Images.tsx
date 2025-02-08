import * as React from "react";

import { Spinner } from "../../widgets/ui/Spinner";

import { useGetImagesQuery } from "./api/ImagesApi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Pagination } from "../../shared/ui/Pagination/Pagination";
import { Gallery } from "../../@types/Gallery";
import { Empty } from "../../shared/ui/Empty/Empty";

type ImagesProps = {
    kinopoiskId: number;
};

const Images: React.FC<ImagesProps> = ({ kinopoiskId }) => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page")
        ? Number(searchParams.get("page"))
        : 1;

    const navigate = useNavigate();

    const { data, error, isLoading } = useGetImagesQuery({
        id: kinopoiskId,
        page,
    }) as { data: Gallery; error: any; isLoading: boolean };

    if (error) {
        return <>Ошибка</>;
    }

    if (isLoading) {
        return <Spinner />;
    }

    const handlePageChange = (newPage: number) => {
        navigate({ search: `?page=${newPage}`, hash: "#images" });
    };

    return (
        <div className='flex flex-col gap-3 md:gap-5'>
            {data.total === 0 && <Empty />}

            {data.total > 0 && (
                <>
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3'>
                        {data.items &&
                            data.items.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <img
                                            src={item.previewUrl}
                                            className='w-full h-auto'
                                        />
                                    </div>
                                );
                            })}
                    </div>
                    <Pagination
                        page={page}
                        totalPages={data.totalPages}
                        handlePageChange={handlePageChange}
                        disabled={isLoading}
                    />
                </>
            )}
        </div>
    );
};

export { Images };
