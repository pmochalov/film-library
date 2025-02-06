import * as React from "react";

type H3Props = {
    title: string | null | React.ReactElement;
};

const H3: React.FC<H3Props> = ({ title }) => {
    return (
        <h2 className='p-3 font-semibold text-white bg-gray-900'>{title}</h2>
    );
};

export { H3 };
