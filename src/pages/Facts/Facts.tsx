import * as React from "react";

import { RootState } from "../../app/store";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchFacts, resetFactsState } from "./model/factsSlice";
import { Spinner } from "../../widgets/ui/Spinner";
import { ErrorMessage } from "../../widgets/ui/ErrorMessage";
import { FactsItem } from "./FactsItem";

type FactsProps = {
    kinopoiskId: number;
};

const Facts: React.FC<FactsProps> = ({ kinopoiskId }) => {
    const dispatch = useAppDispatch();

    const { data, loading, error } = useAppSelector(
        (state: RootState) => state.facts
    );

    React.useEffect(() => {
        if (kinopoiskId) {
            dispatch(fetchFacts({ id: kinopoiskId }));
        }

        return () => {
            dispatch(resetFactsState());
        };
    }, [dispatch, kinopoiskId]);

    if (error) {
        return <ErrorMessage error={error} />;
    }

    if (loading) {
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
