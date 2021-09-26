import {getDay, getFromLocalStorage} from "./helper";

export {loadingHome}

const loadingHome = (app) => {

    setBackground()
    setGardenerBanner()
    setCounterColor()
    checkCloudsAndMoon()
    setPlant()

    setLevel()
    setPoints()
    addModalData(app)
    updateCounter()
}

const addModalData = (app) => {
    const levels = [
        3000,
        10000,
        20000
    ]

    const userModalUsername = document.getElementById("user-modal-username")
    const userModalPoints = document.getElementById("user-modal-points")
    const userModalHistory = document.getElementById("user-modal-history")
    const userModalPointsNext = document.getElementById("user-modal-points-next")
    const userModalReward = document.getElementById("user-modal-reward")
    const nextLevel = parseInt(getFromLocalStorage('level'))
    const userData = JSON.parse(getFromLocalStorage('user'))

    userModalUsername.innerText = userData.name
    userModalPoints.innerText = userData.userPoint

    let pointsNeeded = levels[nextLevel] - userData.userPoint
    let progressBarPercent = Math.floor((100 / levels[nextLevel]) * userData.userPoint)

    userModalPointsNext.innerText = pointsNeeded

    app.progressbar.set("#user-modal-progess", progressBarPercent, 1)

    userModalHistory.innerHTML = "<div class=\"chip color-green user-modal-badge\"><div className=\"chip-label\">" + userData.userRatingHistory[1] + "</div></div>"
    userModalHistory.innerHTML = userModalHistory.innerHTML + "<div class=\"chip color-green user-modal-badge\"><div className=\"chip-label\">" + userData.userRatingHistory[2] + "</div></div>"
    userModalHistory.innerHTML = userModalHistory.innerHTML + "<div class=\"chip color-green user-modal-badge\"><div className=\"chip-label\">" + userData.userRatingHistory[4] + "</div></div>"
    userModalHistory.innerHTML = userModalHistory.innerHTML + "<div class=\"chip color-green user-modal-badge\"><div className=\"chip-label\">" + userData.userRatingHistory[5] + "</div></div>"
    userModalHistory.innerHTML = userModalHistory.innerHTML + "<div class=\"chip color-green user-modal-badge\"><div className=\"chip-label\">" + userData.userRatingHistory[6] + "</div></div>"
    userModalHistory.innerHTML = userModalHistory.innerHTML + "<div class=\"chip color-green user-modal-badge\"><div className=\"chip-label\">" + userData.userRatingHistory[7] + "</div></div>"
    userModalHistory.innerHTML = userModalHistory.innerHTML + "<div class=\"chip color-green user-modal-badge\"><div className=\"chip-label\">" + userData.userRatingHistory[8] + "</div></div>"
    userModalHistory.innerHTML = userModalHistory.innerHTML + "<div class=\"chip color-green user-modal-badge\"><div className=\"chip-label\">" + userData.userRatingHistory[9] + "</div></div>"
    userModalHistory.innerHTML = userModalHistory.innerHTML + "<div class=\"chip color-green user-modal-badge\"><div className=\"chip-label\">" + userData.userRatingHistory[10] + "</div></div>"
    userModalHistory.innerHTML = userModalHistory.innerHTML + "<div class=\"chip color-green user-modal-badge\"><div className=\"chip-label\">" + userData.userRatingHistory[11] + "</div></div>"
    userModalHistory.innerHTML = userModalHistory.innerHTML + "<div class=\"chip color-green user-modal-badge\"><div className=\"chip-label\">" + userData.userRatingHistory[12] + "</div></div>"

    const reward = String(userData.eligibleForReward)

    if (reward.toLowerCase() === 'true') {
        userModalReward.innerHTML = "You are eligible for a Reward <i class=\"f7-icons\">smiley</i>"
    } else {
        userModalReward.innerHTML = "Currently there is no reward for you."
    }
}

const setLevel = () => {
    const levelLabel = document.getElementById("level-label")
    const level = getFromLocalStorage('level')
    levelLabel.innerText = "Level: " + level
}

const setBackground = () => {
    const page = document.getElementById("page_")
    getDay() ? page.style.backgroundImage = "url(../assets/img/sky-day.svg)" : page.style.backgroundImage = "url(../assets/img/sky-night.svg)";
}

const setPoints = () => {
    const points = parseInt(getFromLocalStorage('points')) ?? 1000
    const pointCounter = document.getElementById("point-counter")
    pointCounter.dataset.target = points
}

const setPlant = () => {
    const plantLevel = document.getElementById("plant-level")
    const level = getFromLocalStorage('level') ?? 1
    const day = getDay() ? "day" : "night"


    plantLevel.src = "../assets/img/full-plant-l" + level + "-" + day + ".svg"
}

const setGardenerBanner = () => {
    const gardenerFont = document.getElementById("gardener-font")
    getDay() ? gardenerFont.src = "../assets/img/gardener-day.svg" : gardenerFont.src = "../assets/img/gardener-night.svg"
}

const setCounterColor = () => {
    const pointCounter = document.getElementById("point-counter")
    getDay() ? pointCounter.style.color = "#000000" : pointCounter.style.color = "E0E0E0";
}

const checkCloudsAndMoon = () => {
    const leftCloud = document.getElementById("mainScreenCloudLeft")
    const rightCloud = document.getElementById("mainScreenCloudRight")
    const moon = document.getElementById("mainScreenMoon")

    if (!getDay()) {
        leftCloud.style.display = 'none'
        rightCloud.style.display = 'none'
    } else {
        moon.style.display = 'none'
    }
}


const updateCounter = () => {
    const counters = document.querySelectorAll(".count");
    const speed = 500;

    counters.forEach((counter) => {
        const updateCount = () => {
            const target = parseInt(counter.getAttribute("data-target"));
            const count = parseInt(counter.innerText);
            const increment = Math.trunc(target / speed);

            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
}