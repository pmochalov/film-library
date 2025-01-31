import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout.tsx";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
} from "react-router-dom";
import { Film } from "./pages/Film.tsx";

import { store } from "./app/store.ts";

import { Provider } from "react-redux";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path='/'
            element={<Layout />}
            errorElement={<>Страница ошибки</>}
        >
            <Route index element={<>dasd</>} />
            <Route path='film/:filmId' element={<Film />} />
        </Route>
    ),
    {
        basename: "/",
    }
);

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
