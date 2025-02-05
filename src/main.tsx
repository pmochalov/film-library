import { createRoot } from "react-dom/client";
import "./index.css";

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
} from "react-router-dom";
import { Film } from "./pages/Film/Film.tsx";

import { store } from "./app/store.ts";

import { Provider } from "react-redux";
import Layout from "./widgets/ui/Layout.tsx";
import { ErrorPage } from "./pages/Error/Error.tsx";
import { Home } from "./pages/Home/Home.tsx";
import { Collections } from "./pages/Collections/Collections.tsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />} errorElement={<ErrorPage />}>
            <Route index element={<Home />} />
            <Route path='film/:filmId' element={<Film />} />
            <Route path='collection' element={<Collections />} />
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
