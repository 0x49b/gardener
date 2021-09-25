import $ from "dom7";
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
      startListeners();
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

function startListeners() {
  $(".convert-form-to-data").on("click", function () {
    if (
      document.querySelector(".input-invalid") ||
      document.querySelector("input[name=username]").value == "" ||
      document.querySelector("input[name=password]").value == ""
    ) {
      app.dialog.alert("Please provide correct data", "Invalid Input(s)");
    } else {
      var formData = app.form.convertToData(".login-form");
      console.log("Logged in as " + formData.username);
    }
  });
}

export default app;
