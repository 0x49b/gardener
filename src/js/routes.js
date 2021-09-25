import LoadingPage from "../pages/loading.f7";
import LoginPage from "../pages/login.f7";
import MainPage from "../pages/home.f7";

const routes = [
    {
        path: "/",
        name: "login",
        component: LoginPage,
    },
    {
        path: "/loading",
        name: "loading",
        component: LoadingPage,
    },
    {
        path: "/home",
        name: "home",
        component: MainPage,
    },
];

export default routes;
