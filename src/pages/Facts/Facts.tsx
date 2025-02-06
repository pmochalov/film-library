import * as React from "react";

import { FactsItem } from "./FactsItem";
import { Spinner } from "../../widgets/ui/Spinner";

import { useGetFactsQuery } from "./api/FactsApi";

type FactsProps = {
    kinopoiskId: number;
};

const Facts: React.FC<FactsProps> = ({ kinopoiskId }) => {
    const { data, error, isLoading } = useGetFactsQuery(kinopoiskId);

    if (error) {
        // return <ErrorMessage error={error} />;
    }

    if (isLoading || !data) {
        return <Spinner />;
    }

    return (
        <div className='grid grid-cols-1 gap-1 md:gap-2'>
            {data.items &&
                data.items.map((item, index) => {
                    return <FactsItem key={index} text={item.text} />;
                })}
        </div>
    );
};

export { Facts };
