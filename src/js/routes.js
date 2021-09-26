import LoadingPage from "../pages/loading.f7";
import LoginPage from "../pages/login.f7";
import MainPage from "../pages/home.f7";

const routes = [
    {
        path: "/login",
        name: "login",
        component: LoginPage,
    },
    {
        path: "/",
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
