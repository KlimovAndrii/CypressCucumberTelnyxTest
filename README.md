# Test Telnyx.com web site pages by Cypress + Cucumber
Simple testing project.

## Install and setup
1. Install Node.js v.16.17.1: https://nodejs.org/dist/v16.17.1/node-v16.17.1-x64.msi
2. Install Visual Studio Code: https://code.visualstudio.com/docs/?dv=win
3. Install Java: https://javadl.oracle.com/webapps/download/AutoDL?BundleId=246808_424b9da4b48848379167015dcc250d8d
4. Clone project to your PC. 
5. Open it in VSCode and run **npm install** commands in terminal.
   
## Run test
1. Run test in headless mode **npm run cypress:run** command (cucumber framework).
2. Run test in headed mode **npm run cypress:open** command (cucumber framework).
3. Run test in headless mode **npm runcypress:run:another** command (uses a different config file **cypressAnother.config.js**).