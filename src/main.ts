import { app, BrowserWindow } from "electron";

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: __dirname + "/preload.js",
        },
    });
    win.loadFile("./html/index.html");
};

(async () => {
    await app.whenReady();
    createWindow();
})();

app.on("window-all-closed", () => {
    app.quit();
});
