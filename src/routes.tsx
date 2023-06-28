import { FC } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import SearchPage from "./pages/search/search.page";
import Layout from "./pages/layout";
import ListPage from "./pages/list/list.page";

export enum TRoutes {
    SEARCH = "/",
    LIST = "/list",
    SELECTED = "/selected",
}

const AppRoutes: FC = () => (
    <BrowserRouter>
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <Outlet />
                    </Layout>
                }
            >
                <Route index element={<SearchPage />} />

                <Route
                    path={TRoutes.LIST}
                    element={<ListPage />}
                />

                {/* <Route
                    path={TRoutes.SELECTED}
                    element={<SelectedPage />}
                /> */}
            </Route>
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
