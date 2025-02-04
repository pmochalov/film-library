import * as React from "react";

import { RootState } from "../../app/store";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchFacts, resetFactsState } from "./model/factsSlice";
import { Spinner } from "../../widgets/ui/Spinner";
import { ErrorMessage } from "../../widgets/ui/ErrorMessage";

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
        <div className='grid grid-cols-1 gap-2 md:gap-3'>
            {data.items &&
                data.items.map((item, index) => {
                    return (
                        <div
                            className='p-4 md:px-8 md:py-8 bg-slate-100'
                            key={index}
                        >
                            {item.text}
                        </div>
                    );
                })}
        </div>
    );
};

export { Facts };
