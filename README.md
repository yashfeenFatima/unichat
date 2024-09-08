# Unichat Application

![Chat Application](https://i.ibb.co/GJwyy9m/Bv9-Js3-QLOLY-HD.jpg)

## Introduction

This is a code repository for the corresponding video tutorial. In this video, we create a full Realtime Chat Application with Social Auth and dedicated chat APIs/sockets.

You will learn how to build a react chat app using [https://chatengine.io](https://chatengine.io)

Firebase and Chat Engine are greats tools to setup apps fast and easily - great to learn with!

### Bonus - E-mail notifications

If you want to upgrade this chat application even further than what is shown in the video, you can add e-mail notifications. More info on https://chatengine.io/docs/email_notifications.

# How to run the project

- clone the repository
- in the codebase search for `project-id` (CTRL + SHIFT + F)
- change it with the uniChat project id created on the uniChat dashboard
- then search for `private-key`
- Change it with the private-key of the project created on the uniChat dashboard
- Go to `src/components/firebase.js
- Fill out the values from the firebase project dashboard (website) for the following:

```
const cofig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
}
```

- run the project by running these commands:

```
npm install
npm start
```
