import $, { val, value } from "dom7";
import Framework7 from "framework7/bundle";

// Import F7 Styles
import "framework7/framework7-bundle.css";

// Import Icons and App Custom Styles
import "../css/icons.css";
import "../css/app.less";

// Import Routes
import routes from "./routes.js";
// Import Store
import store from "./store.js";

// Import main app component
import App from "../app.f7";

var app = new Framework7({
  name: "Gardener", // App name
  theme: "ios", // Automatic theme detection
  el: "#app", // App root element
  component: App, // App main component

  on: {
    init: function () {
      console.log("App initialized");
    },
    pageInit: async function () {
      console.log("Page initialized");
      await startListeners();
    },
  },
  // App store
  store: store,
  // App routes
  routes: routes,
  // Register service worker (only on production build)
  serviceWorker:
    process.env.NODE_ENV === "production"
      ? {
          path: "/service-worker.js",
        }
      : {},
});
var lat = 46.743552;
var lng = 9.5551488;

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition((position) => {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
  });
} else {
  //return ["5:47:11 AM", "5:55:59 PM", "11:51:35 AM"]; // Zurich, 25-09-2021
}

async function startListeners() {
  var mainView = app.view.main;
  var greetingText = "Good ";
  var daytime;
  var nighttime;
  var afternoontime;
  var morningTime;
  var eveningTime;
  app.request
    .json(
      `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today&formatted=0`
    )
    .then((res) => {
      var sunrise = res.data.results.sunrise;
      var sunset = res.data.results.sunset;
      var solar_noon = res.data.results.solar_noon;

      nighttime = new Date(sunset);
      afternoontime = new Date(solar_noon);
      morningTime = new Date(sunrise);

      const timeDiff =
        new Date(solar_noon).getTime() - new Date(sunrise).getTime();
      daytime = new DataTransfer(morningTime.getTime() + timeDiff / 3);
      eveningTime = new Date(nighttime.getTime() - timeDiff / 3);

      const today = new Date();
      console.log(today);
      console.log(eveningTime);

      if (today >= eveningTime) {
        console.log("nsdnvfklassas");
        greetingText = greetingText + " Evening!";
        $("#page_").css("background-image", "url(../assets/img/sky-day.svg)");
      } else if (today >= afternoontime) {
        console.log("asasasass");
        greetingText = greetingText + " Afteroon!";
        $("#page_").css("background-image", "url(../assets/img/sky-day.svg)");
      } else if (today >= datetime) {
        console.log("nsdnvfkl");
        greetingText = greetingText + " Morning!";
        $("#page_").css("background-image", "url(../assets/img/sky-day.svg)");
      } else if (today >= morningTime) {
        console.log("nsdnvfkl");
        greetingText = greetingText + " Morning!";
        $("#page_").css("background-image", "url(../assets/img/sky-night.svg)");
      } else if (today < morningTime) {
        console.log("nsdnvfkl");
        greetingText = greetingText + " Night!";
        $("#page_").css("background-image", "url(../assets/img/sky-night.svg)");
      }
    });
  $(".convert-form-to-data").on("click", async function () {
    if (
      document.querySelector(".input-invalid") ||
      document.querySelector("input[name=username]").value == "" ||
      document.querySelector("input[name=password]").value == ""
    ) {
      app.dialog.alert("Please provide correct data", "Invalid Input(s)");
    } else {
      var formData = app.form.convertToData(".login-form");
      console.log("Logged in as " + formData.username);
      mainView.router.navigate({ name: "home" });
    }
  });
}
export default app;
