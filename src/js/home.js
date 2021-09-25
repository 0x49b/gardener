import {hide} from "dom7";
import {getFromLocalStorage, getDay} from "./helper";

export {loadingHome}

const loadingHome = (mainView) => {
    setGardenerBanner()
    setCounterColor()
    checkCloudsAndMoon()
    setPlant()

    setPoints()
    updateCounter()




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

    console.log("../assets/img/full-plant-l" + level + "-" + day + ".svg")

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