# Working hours

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.8.
NodeJs required 

install with npm install

Start the api server first and afterwards the development server with ng serve.
Now you should see the working hours list on http://localhost:4200/
For more information read the following instructions:

## API server

Run node server/index.js in your terminal

## Development server


- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. 

_disable web security in chrome or your chosen browser on local environment_

## Chrome Browser in no CORS mode
https://alfilatov.com/posts/run-chrome-without-cors

### MAC

open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome http://localhost:4200/ --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security

### Windows

- Right click on desktop, add new shortcut
- Add the target as "[PATH_TO_CHROME]\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp 
- Click OK.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
