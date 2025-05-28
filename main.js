const { app, BrowserWindow, Menu } = require('electron')

function createWindow() {
  // 创建窗口
  const win = new BrowserWindow({
    width: 1080,
    height: 768,
    minWidth:1080,
    minHeight:768,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

    // 锁定宽高比为 9:16
    win.setAspectRatio(45 / 32);

  // 加载本地文件或URL
  win.loadFile('index.html')
}

app.whenReady().then( () => {
    createWindow()
    Menu.setApplicationMenu(null)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})