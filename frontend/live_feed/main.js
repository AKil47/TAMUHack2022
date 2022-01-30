const firebase = require("firebase");
require("firebase/firestore");

const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 125,
        height: 600,
        resizable: false
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})