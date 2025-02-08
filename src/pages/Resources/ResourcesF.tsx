import * as React from "react";

import { useGetResourcesQuery } from "./api/ResourcesApi";

import { Spinner } from "../../widgets/ui/Spinner";
import { ResourcesItem } from "./ResourcesItem";
import { Resources } from "../../@types/Resources";
import { Empty } from "../../shared/ui/Empty/Empty";

type ResourcesProps = {
    kinopoiskId: number;
};

const ResourcesF: React.FC<ResourcesProps> = ({ kinopoiskId }) => {
    const { data, error, isLoading } = useGetResourcesQuery(kinopoiskId) as {
        data: Resources;
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
        <div className='flex flex-wrap gap-1 md:gap-2'>
            {data.total === 0 && <Empty />}

            {data.total > 0 &&
                data.items &&
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

export { ResourcesF };
