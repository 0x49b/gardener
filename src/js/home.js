import { getDay, getFromLocalStorage } from "./helper";
import $ from "dom7";

export { loadingHome };

const loadingHome = (app) => {
  setBackground();
  setGardenerBanner();
  setCounterColor();
  checkCloudsAndMoon();
  setPlant();

  setLevel();
  setPoints();
  addModalData(app);
  updateCounter();
};

const addModalData = (app) => {
  const levels = [3000, 10000, 20000];

  const userModalUsername = $("#user-modal-username");
  const userModalPoints = $("#user-modal-points");
  const userModalHistory = $("#user-modal-history");
  const userModalPointsNext = $("#user-modal-points-next");
  const userModalReward = $("#user-modal-reward");
  const nextLevel = parseInt(getFromLocalStorage("level"));
  const userData = JSON.parse(getFromLocalStorage("user"));

  userModalUsername.text(userData.name);
  userModalPoints.text(userData.userPoint);

  let pointsNeeded = levels[nextLevel] - userData.userPoint;
  let progressBarPercent = Math.floor(
    (100 / levels[nextLevel]) * userData.userPoint
  );

  userModalPointsNext.text(pointsNeeded);

  app.progressbar.set("#user-modal-progess", progressBarPercent, 1);

  userModalHistory.html(
    '<div class="chip color-green user-modal-badge"><div className="chip-label">' +
      userData.userRatingHistory[1] +
      "</div></div>"
  );
  userModalHistory.html(
    userModalHistory.html() +
      '<div class="chip color-green user-modal-badge"><div className="chip-label">' +
      userData.userRatingHistory[2] +
      "</div></div>"
  );
  userModalHistory.html(
    userModalHistory.html() +
      '<div class="chip color-green user-modal-badge"><div className="chip-label">' +
      userData.userRatingHistory[4] +
      "</div></div>"
  );
  userModalHistory.html(
    userModalHistory.html() +
      '<div class="chip color-green user-modal-badge"><div className="chip-label">' +
      userData.userRatingHistory[5] +
      "</div></div>"
  );
  userModalHistory.html(
    userModalHistory.html() +
      '<div class="chip color-green user-modal-badge"><div className="chip-label">' +
      userData.userRatingHistory[6] +
      "</div></div>"
  );
  userModalHistory.html(
    userModalHistory.html() +
      '<div class="chip color-green user-modal-badge"><div className="chip-label">' +
      userData.userRatingHistory[7] +
      "</div></div>"
  );
  userModalHistory.html(
    userModalHistory.html() +
      '<div class="chip color-green user-modal-badge"><div className="chip-label">' +
      userData.userRatingHistory[8] +
      "</div></div>"
  );
  userModalHistory.html(
    userModalHistory.html() +
      '<div class="chip color-green user-modal-badge"><div className="chip-label">' +
      userData.userRatingHistory[9] +
      "</div></div>"
  );
  userModalHistory.html(
    userModalHistory.html() +
      '<div class="chip color-green user-modal-badge"><div className="chip-label">' +
      userData.userRatingHistory[10] +
      "</div></div>"
  );
  userModalHistory.html(
    userModalHistory.html() +
      '<div class="chip color-green user-modal-badge"><div className="chip-label">' +
      userData.userRatingHistory[11] +
      "</div></div>"
  );
  userModalHistory.html(
    userModalHistory.html() +
      '<div class="chip color-green user-modal-badge"><div className="chip-label">' +
      userData.userRatingHistory[12] +
      "</div></div>"
  );

  const reward = String(userData.eligibleForReward);

  if (reward.toLowerCase() === "true") {
    userModalReward.html(
      'You are eligible for a Reward <i class="f7-icons">smiley</i>'
    );
  } else {
    userModalReward.html("Currently there is no reward for you.");
  }
};

const setLevel = () => {
  const levelLabel = $("#level-label");
  const level = getFromLocalStorage("level");
  levelLabel.html("Level: " + level);
};

const setBackground = () => {
  const page = $("#page_");
  getDay()
    ? page.css("background-image", "url(../assets/img/sky-day.svg)")
    : page.css("background-image", "url(../assets/img/sky-night.svg)");
};

const setPoints = () => {
  const points = parseInt(getFromLocalStorage("points")) ?? 1000;
  const pointCounter = $("#point-counter");
  pointCounter.dataset.target = points;
};

const setPlant = () => {
  const plantLevel = $("#plant-level");
  const level = getFromLocalStorage("level") ?? 1;
  const day = getDay() ? "day" : "night";

  plantLevel.css(
    "src",
    "../assets/img/full-plant-l" + level + "-" + day + ".svg"
  );
};

const setGardenerBanner = () => {
  const gardenerFont = $("#gardener-font");
  getDay()
    ? gardenerFont.css("src", "../assets/img/gardener-day.svg")
    : gardenerFont.css("src", "../assets/img/gardener-night.svg");
};

const setCounterColor = () => {
  const pointCounter = $("#point-counter");
  getDay()
    ? pointCounter.css("color", "#000000")
    : pointCounter.css("color", "E0E0E0");
};

const checkCloudsAndMoon = () => {
  const leftCloud = $("#mainScreenCloudLeft");
  const rightCloud = $("#mainScreenCloudRight");
  const moon = $("#mainScreenMoon");

  if (!getDay()) {
    leftCloud.css("display", "none");
    rightCloud.css("display", "none");
  } else {
    moon.css("display", "none");
  }
};

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
};
