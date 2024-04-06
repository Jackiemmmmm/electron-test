const { contextBridge, ipcRenderer } = require("electron/renderer");

contextBridge.exposeInMainWorld("api", {
  sendToMain: (params) => {
    // 通过 ipcRenderer 发送消息给主进程
    ipcRenderer.send("get-params", params);
    // const xhr = new XMLHttpRequest();
    // const url = "https://www.naims.top/transfer/send/data";
    // xhr.open("POST", url, true);
    // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // xhr.send(params);
  },
});
