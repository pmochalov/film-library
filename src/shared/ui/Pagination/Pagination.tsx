import * as React from "react";

type PaginationProps = {
    page: number;
    totalPages: number;
    handlePageChange: (page: number) => void;
    disabled: boolean;
};

const btnClassName =
    "flex-grow p-3 border text-slate-900 bg-slate-200 border-slate-200 disabled:bg-slate-100 disabled:text-slate-400 hover:border-slate-300 hover:bg-slate-300";

const Pagination: React.FC<PaginationProps> = ({
    page,
    totalPages,
    handlePageChange,
    disabled,
}) => {
    return (
        <div className='flex flex-col gap-3'>
            <div className='flex gap-3'>
                <button
                    onClick={() => handlePageChange(Number(page) - 1)}
                    className={btnClassName}
                    disabled={Number(page) === 1 || disabled}
                >
                    &larr; Назад
                </button>
                <button
                    onClick={() => handlePageChange(Number(page) + 1)}
                    className={btnClassName}
                    disabled={totalPages === page || disabled}
                >
                    Далее &rarr;
                </button>
            </div>
            <div className='text-sm text-slate-500'>
                Страница {page} из {totalPages}
            </div>
        </div>
    );
};

export { Pagination };
