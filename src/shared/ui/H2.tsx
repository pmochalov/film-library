import * as React from "react";

type H2Props = {
    title: string | null;
};

const H2: React.FC<H2Props> = ({ title }) => {
    return (
        <h2 className='text-xl font-semibold md:text-2xl lg:text-3xl'>
            {title}
        </h2>
    );
};

export { H2 };
