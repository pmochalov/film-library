import * as React from "react";

import { RootState } from "../../app/store";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchFacts, resetFactsState } from "../../features/factsSlice";

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
                        return <div key={index}>{item.text}</div>;
                    })}
            </div>
        </div>
    );
};

export { Facts };
