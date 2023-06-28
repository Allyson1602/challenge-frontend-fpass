import { FC } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import SearchPage from "./pages/search/search.page";
import Layout from "./pages/layout";
import ListPage from "./pages/list/list.page";
import DetailPage from "./pages/detail/detail.page";

export enum TRoutes {
    SEARCH = "/",
    LIST = "/list",
    DETAIL = "/detail",
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

                <Route
                    path={TRoutes.DETAIL}
                    element={<DetailPage />}
                />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
