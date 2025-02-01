import * as React from "react";

type H1Props = {
    title: string | null;
};

const H1: React.FC<H1Props> = ({ title }) => {
    return (
        <h1 className='text-2xl font-semibold md:text-3xl lg:text-6xl'>
            {title}
        </h1>
    );
};

export { H1 };
