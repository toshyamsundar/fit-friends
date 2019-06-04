# fit-friends
A fitness tracker for friends
Our app lets each user create a profile where they can set their goals in regards to predefined activities and then track their daily status with those activities.
It allows them to track their water intake,calorie intake and minutes exercising so they can ensure they are staying on track with their goals.

A comparison page shows the difference between their goals entered and their tracked daily amount for those goals in the form of a graph.
The friend finder aspect allows each user to search for a friend by their username and then connect with them so both parties can track their fitness levels together.

In the future an aspect that would be added to this app is to allow users to create fitness challenges with their friends and keep track of eachothers activity levels and rewards points to each user.

```
.
|-- README.md
|-- config
|   `-- config.json
|-- db
|   `-- schema.sql
|-- models
|   |-- activity.js
|   |-- goal.js
|   |-- index.js
|   |-- metric.js
|   `-- user.js
|-- package.json
|-- public
|   |-- activities.html
|   |-- comparison.html
|   |-- css
|   |   `-- style.css
|   |-- friends.html
|   |-- goals.html
|   |-- index.html
|   |-- images
|   |   |-- CALORIES.jpg
|   |   |-- CARDIO.jpg
|   |   |-- GYM.jpg
|   |   |-- MAIN.jpg
|   |   |-- SLEEP.jpg
|   |   |-- WATER.jpg
|   |   |-- basketball.png
|   |   |-- calories.png
|   |   |-- hero_bg_3.jpg
|   |   |-- img1.jpg
|   |   |-- jumbotron.jpg
|   |   |-- running.png
|   |   |-- waist.png
|   |   |-- walking.png
|   |   |-- water_goal.png
|   |   `-- yoga.jpg
|   |-- js
|   |   |-- app.js
|   |   `-- chart.js
|   `-- profile.html
|-- routes
|   |-- api-routes.js
|   `-- html-routes.js
`-- server.js
```