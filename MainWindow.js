const { BrowserWindow } = require("electron");

class MainWindow extends BrowserWindow {
  constructor(file, isDev) {
    super({
      title: "Monitor app",
      width: isDev ? 800 : 355,
      height: 500,
      icon: "./assets/icons/icon.png",
      resizable: isDev ? true : false,

      // below code refers to on opening
      // the application his the mainwindow
      show: false,
      opacity: 0.9,
      webPreferences: {
        nodeIntegration: true,
      },
    });

    this.loadFile(file);
    if (isDev) {
      this.webContents.openDevTools();
    }
  }
}

module.exports = MainWindow;
