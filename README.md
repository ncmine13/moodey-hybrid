# App

> This project is an expansion and revamp of a project constructed for coursework in April 2017. This hybrid app uses the Quasar front-end framework, which runs on Vue.js and node.js, and a back-end built with an Express server and a Sequelize ORM with SQlite. It is in the early stages of development and not yet deployed, though the initial iteration exists at https://moodappproj3.herokuapp.com/home/register.


> Their are several foundational purposes underlying this project:
⋅⋅* To encourage mindful reflection in a convenient rather than cumbersome setting
⋅⋅* To allow users to track potential environmental mood correlates without entering too much information firsthand
..* To allow for external cross-user data analysis relating to mood, climate (physical and political), and demographics


To run locally with npm installed clone the repo and from the root directory:

`npm install -g nodemon`
`npm install`
`cd server`
`nodemon`

`cd ../client`
`npm run dev`

References:

freeCodeCamp tutorial by Cody Seibert: Full Stack Web App Using Vue.js and Express.js
Quasar docs


## Build Setup

``` bash
# install dependencies
$ npm install
# serve with hot reload at localhost:8080
$ quasar dev
# build for production with minification
$ quasar build
# lint code
$ quasar lint
```