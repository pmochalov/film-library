import * as React from "react";

const Footer: React.FC = () => {
    return (
        <footer className='flex items-center bg-slate-700'>
            <div className='container px-4 py-10 mx-auto text-gray-400'>
                2025, <a href='https://github.com/pmochalov'>Pavel Mochalov</a>
            </div>
        </footer>
    );
};

export { Footer };
