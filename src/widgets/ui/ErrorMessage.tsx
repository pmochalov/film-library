import * as React from "react";

type ErrorProps = {
    error: string;
};

const ErrorMessage: React.FC<ErrorProps> = ({ error }) => {
    return (
        <div>
            <span className='font-semibold'>Ошибка:</span> {error}
        </div>
    );
};

export { ErrorMessage };
