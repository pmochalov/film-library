import * as React from "react";

type FactsItemProps = {
    text: string;
};

const FactsItem: React.FC<FactsItemProps> = ({ text }) => {
    return (
        <div className='p-4 md:px-8 md:py-8 bg-slate-100 hover:bg-slate-200 before:content-["—_"]'>
            {text}
        </div>
    );
};

export { FactsItem };
