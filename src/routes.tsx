import { FC } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import SearchPage from "./pages/search/search.page";
import LayoutPage from "./pages/layout";

export enum TRoutes {
    SEARCH = "/search",
    LIST = "/list",
    SELECTED = "/selected",
}

const AppRoutes: FC = () => (
    <BrowserRouter>
        <Routes>
            <Route
                path="/"
                element={
                    <LayoutPage>
                        <Outlet />
                    </LayoutPage>
                }
            >
                <Route index element={<SearchPage />} />

                {/* <Route
                    path={TRoutes.LIST}
                    element={<ListPage />}
                /> */}

                {/* <Route
                    path={TRoutes.SELECTED}
                    element={<SelectedPage />}
                /> */}
            </Route>
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
