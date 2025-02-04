import * as React from "react";

import { RootState } from "../../app/store";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchResources, resetResourcesState } from "./model/resourcesSlice";
import { Spinner } from "../../widgets/ui/Spinner";
import { ErrorMessage } from "../../widgets/ui/ErrorMessage";
import { ResourcesItem } from "./ResourcesItem";

type ResourcesProps = {
    kinopoiskId: number;
};

const Resources: React.FC<ResourcesProps> = ({ kinopoiskId }) => {
    const dispatch = useAppDispatch();

    const { data, loading, error } = useAppSelector(
        (state: RootState) => state.resources
    );

    React.useEffect(() => {
        if (kinopoiskId) {
            dispatch(fetchResources({ id: kinopoiskId }));
        }

        return () => {
            dispatch(resetResourcesState());
        };
    }, [dispatch, kinopoiskId]);

    if (error) {
        return <ErrorMessage error={error} />;
    }

    if (loading) {
        return <Spinner />;
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
