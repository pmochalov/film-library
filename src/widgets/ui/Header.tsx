import * as React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className='box-border h-20 bg-gray-950'>
            <div className='container flex flex-row items-center justify-between h-20 px-4 mx-auto'>
                <Logo />
                <span className='text-white'>My films</span>
            </div>
        </header>
    );
};

const Logo: React.FC = () => {
    return (
        <Link
            to='/'
            className='px-3 py-1 text-xl font-semibold text-white rounded-lg md:text-2xl lg:text-3xl box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 visited:text-white hover:text-black'
        >
            Фильмотека
        </Link>
    );
};

export { Header };
