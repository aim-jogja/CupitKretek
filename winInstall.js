const electronInstaller = require('electron-winstaller');
const path = require('path');

async function createInstaller(){
    try {
        await electronInstaller.createWindowsInstaller({
          appDirectory: path.resolve(__dirname,'./release-builds-Browser/Browser-win32-ia32'),
          outputDirectory: path.resolve(__dirname,'installer64'),
          authors: 'John Doe',
          exe: 'Browser.exe',
          description: 'Browser',
        //  noMsi : false,
          iconUrl : path.resolve(__dirname,'./assets/icons/win/icon.ico'),
          setupIcon : path.resolve(__dirname,'./assets/setupIcon.ico'),
          setupExe : 'Browser.exe',
        //  setupMsi : 'Browser.exe'
        });
        console.log('It worked!');
      } catch (e) {
        console.log(`No dice: ${e.message}`);
      }
} 

createInstaller();