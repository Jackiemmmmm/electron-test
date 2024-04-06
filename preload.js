const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
    validPassword: (password) => ipcRenderer.send('send-password', password)
})