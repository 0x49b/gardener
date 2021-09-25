import {loadingHome} from "./home";
import {addToLocaleStorage} from "./helper";

export {loadingUserData}

const loadingUserData = function (mainView, skip = false) {

    setUserLevel()
    setUserPoints()

    if (!skip) {
        const loadingMessages = [
            "Starting your Garden",
            "Raking Grounds",
            "Planting Trees",
            "Watering Plants",
            "Adjusting Sunlight",
            "Hooray",
        ];

        let i = 1;

        const loadingMessage = document.getElementById("loadingScreenMessage");

        loadingMessage.innerText = loadingMessages[0];

        setInterval(() => {
            if (i < loadingMessages.length) {
                loadingMessage.innerText = loadingMessages[i];
                i++;
            } else {
                loadingMessage.innerText = loadingMessages[loadingMessages.length - 1];
                mainView.router.navigate({name: "home"})
                mainView.router.on("routeChanged", () => {
                    loadingHome(mainView);
                })
            }
        }, Math.random() * (3500 - 1000) + 1000);
    } else {
        mainView.router.navigate({name: "home"})
        mainView.router.on("routeChanged", () => {
            loadingHome(mainView);
        })
    }
}

const setUserLevel = () => {
    // TODO get user Lvl from Database. For MockupReason here it is set randomly
    const lvl = parseInt(Math.random() * (3 - 1) + 1)
    addToLocaleStorage('level', lvl)
}

const setUserPoints = () => {
    //TODO get user points from Database For MockupReasons it is set randomly
    const points = parseInt(Math.random() * (10000 - 1000) + 1000)
    addToLocaleStorage('points', points)
}