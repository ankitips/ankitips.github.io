console.error("wow ");
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js");
}
