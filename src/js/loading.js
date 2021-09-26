import {loadingHome} from "./home";
import {addToLocaleStorage, getDay, getFromLocalStorage} from "./helper";

export {loadingUserData}


const setBackground = () => {
    const page = document.getElementById("page_")
    getDay() ? page.style.backgroundImage = "url(../assets/img/sky-day.svg)" : page.style.backgroundImage = "url(../assets/img/sky-night.svg)";
}

const updateLoadingMessage = (message) => {
    const loadingMessage = document.getElementById("loadingScreenMessage");
    setTimeout(() => {
        loadingMessage.innerText = message
    }, 1)
}


const loadingUserData = function (mainView, skip = false, app) {


    app.request.json("https://migros-hackzurich-backend.herokuapp.com/api/v1/user?id=101361").then((res) => {

        updateLoadingMessage("Entering your Garden")
        setBackground()
        updateLoadingMessage("Raking ground")

        addToLocaleStorage('user', JSON.stringify(res.data))
        addToLocaleStorage('points', res.data.userPoint)

        updateLoadingMessage("Adding Plants")

        setUserLevel()

        updateLoadingMessage("Hooray !!!")

        mainView.router.navigate({name: "home"})
        mainView.router.on("routeChanged", () => {
            loadingHome(app);
        })
    });
}

const setUserLevel = () => {

    let lvl = 1
    const userPoints = parseInt(getFromLocalStorage('points')) ?? 0

    if (userPoints < 3000) {
        lvl = 1
    } else if (userPoints > 3000 && userPoints < 10000) {
        lvl = 2
    } else if (userPoints > 10000 && userPoints < 20000) {
        lvl = 3
    }

    addToLocaleStorage('level', lvl)
}
