import { RouteObject, useRoutes } from "react-router-dom";
import { PATHS } from "@routes/paths";
import Home from "@pages/Home";
import Test from "@pages/Test";
import CompletedTest from "@pages/CompletedTest";

const _routes: Array<RouteObject> = [
    {
        path: PATHS().home,
        element: <Home />,
    },
    {
        path: PATHS(":testPart").test,
        element: <Test />,
    },
    {
        path: PATHS().finishScreen,
        element: <CompletedTest />,
    },
];

export default function Routes() {
    return useRoutes(_routes);
}
