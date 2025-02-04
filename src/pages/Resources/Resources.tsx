import * as React from "react";

import { useGetResourcesQuery } from "./api/ResourcesApi";

import { Spinner } from "../../widgets/ui/Spinner";
import { ResourcesItem } from "./ResourcesItem";

type ResourcesProps = {
    kinopoiskId: number;
};

const Resources: React.FC<ResourcesProps> = ({ kinopoiskId }) => {
    const { data, error, isLoading } = useGetResourcesQuery(kinopoiskId);

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
        <div className='flex flex-wrap gap-1 md:gap-2'>
            {data.items &&
                data.items.map((item, index) => {
                    return (
                        <ResourcesItem
                            url={item.url}
                            platform={item.platform}
                            logoUrl={item.logoUrl}
                            key={index}
                        />
                    );
                })}
        </div>
    );
};

export { Resources };
