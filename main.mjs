import { app, BrowserWindow } from 'electron';
import path from 'path';
import isDev from 'electron-is-dev';

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    // Set the window title
    title: "PauseBreak",
  });

  const startUrl = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;
  mainWindow.loadURL(startUrl);

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
