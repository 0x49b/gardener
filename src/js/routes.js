import LoadingPage from "../pages/loading.f7";
import LoginPage from "../pages/login.f7";
import MainPage from "../pages/home.f7";

var routes = [{
        path: "/",
        component: LoginPage,
    },
    {
        path: "/loading",
        component: LoadingPage,
    },
    {
        path: "/home",
        component: MainPage,
    },
];

export default routes;