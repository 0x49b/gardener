export {loadingUserData}

const loadingUserData = function (mainView) {

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
        }
    }, Math.random() * (3500 - 1000) + 1000);
}