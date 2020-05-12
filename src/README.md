# Weighter

Weighter is a simple application build with Svelte and Google Firbase for weight tracking. The idea for the app was born when my whiteboard with subsequent dates and kgs ran out of space. At the moment the app is able to work with two modes - simple and extended one. To add new entry in the simple mode only two steps have to be done - chosing a date and filling the weight, the latter one comes with five steps and allows to put more advanced data like - body fat, body water, muscle mass, bone mass.

The app can be build and run on your own firebase configuration. After cloning the repository, please make sure that firebase configuration file is present.

## Prerequisites

## Getting Project

Clone the git repository: https://github.com/Nubzor/Weighter.git

### How to build

#### Dependencies

Dependencies can be installed with Yarn or npm

#### Building and running
##### Building
```nohighlight
yarn build
```
##### Starting dev server
```nohighlight
yarn start:dev
```
Also, the **NODE_ENV** variable should be set to **development**

##### Running tests
```nohighlight
yarn test
```

More scripts can be found in the package.json file.


## Running Weighter

Before running the code, you have to configure [new firebase application](https://console.firebase.google.com/) with Realtime Database. When the app is ready please make sure that:
* firebase project config is present in the application root directory 
    * the config can be coppied from project settings and should be placed inside *firebase.config.js* file
* make sure that sign-in methods for Google and Facebook are enabled.
    * note that Facebook Application is required for Facebook authentication.
