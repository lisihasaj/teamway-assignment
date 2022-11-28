import { RouteObject, useRoutes } from "react-router-dom";
import { PATHS } from "@routes/paths";
import Home from "@pages/Home";
import Survey from "@pages/Survey";
import CompletedSurvey from "@pages/CompletedSurvey";
import NotFound from "@pages/NotFound";

const _routes: Array<RouteObject> = [
    {
        path: PATHS.home,
        element: <Home />,
    },
    {
        path: PATHS.survey,
        element: <Survey />,
    },
    {
        path: PATHS.completedSurvey,
        element: <CompletedSurvey />,
    },
    {
        path: PATHS.notFound,
        element: <NotFound />,
    },
];

export default function Routes() {
    return useRoutes(_routes);
}
