import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import isDev from 'electron-is-dev';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

let mainWindow;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function createWindow() {
  mainWindow = new BrowserWindow({
    // 16 by 10 aspect ratio looks good
    width: 1400,
    height: 875,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
    // Set the window title
    title: "PauseBreak",
  });

  mainWindow.setMenu(null);

  const startUrl = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;
  mainWindow.loadURL(startUrl);

  // Add IPC listeners for window control
  ipcMain.on('window-minimize', () => mainWindow.minimize());
  ipcMain.on('window-maximize', () => mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize());
  ipcMain.on('window-close', () => mainWindow.close());

  if (isDev) {
    mainWindow.webContents.openDevTools();
    waitForReactApp(mainWindow); // Add this line
  }

}

function waitForReactApp(window) {
  const checkReactAppLoaded = () => {
    // Example: Execute JavaScript to check if an element with ID "root" exists
    window.webContents.executeJavaScript('document.getElementById("root") !== null')
      .then((isLoaded) => {
        if (isLoaded) {
          console.log('React app loaded.');
        } else {
          console.log('React app not loaded, refreshing...');
          window.reload(); // Reload the window
          setTimeout(() => checkReactAppLoaded(), 2000); // Check again in 2 seconds
        }
      })
      .catch((error) => console.error('Error checking for React app:', error));
  };

  // Start the check
  checkReactAppLoaded();
}



app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
