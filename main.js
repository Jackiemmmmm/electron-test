const { app, BrowserWindow, BrowserView } = require("electron/main");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  const view = new BrowserView({
    webPreferences: {
      devTools: true,
      contextIsolation: true,
      preload: path.resolve(__dirname, "content.js"),
    },
  });
  win.setBrowserView(view);
  view.setBounds({ x: 0, y: 0, width: 800, height: 600 });
  view.setAutoResize({ width: true, height: true });
  view.webContents.loadURL("https://web.whatsapp.com", {
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.56 Safari/537.36",
  });
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
