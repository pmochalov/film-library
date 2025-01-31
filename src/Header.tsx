import * as React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className='box-border h-20 bg-gray-900'>
            <div className='container flex flex-row items-center justify-between h-20 px-4 mx-auto'>
                <Logo />
                <span className='text-white'>Like!</span>
            </div>
        </header>
    );
};

const Logo: React.FC = () => {
    return (
        <Link
            to='/'
            className='px-3 py-1 text-xl text-white rounded-lg md:text-2xl lg:text-3xl box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500'
        >
            КИНОПиСК
        </Link>
    );
};

export { Header };
