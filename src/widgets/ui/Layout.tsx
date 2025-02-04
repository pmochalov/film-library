// import * as React from "react";

// import "./Layout.css";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className='grid grid-cols-1 grid-template-rows-[auto_1fr_auto] min-h-full'>
            <Header />

            <div className='container mx-auto bg-white'>
                {/*                 <nav className='bg-green-900'>
                    <ul className='flex flex-wrap gap-2'>
                        <li className='nav-item'>Топы</li>
                        <li className='nav-item'>Фильмы</li>
                        <li className='nav-item'>Рейтинги</li>
                        <li className='nav-item'>Что-то еще...</li>
                    </ul>
                </nav> */}
                <main className='p-4'>
                    <Outlet />
                </main>
            </div>

            <Footer />
        </div>
    );
}

export default Layout;
