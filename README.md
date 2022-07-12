# React-OMDB-App 🎬

## Demo

[👉 Link 👈](traptrick-react-omdb-app.netlify.app)

React-OMDB-App is a responsive [React](https://reactjs.org/) app that utilises [React Router](https://reactrouter.com/) to make this app a Single-Page Application(SPA), loading data via [OMDB API](https://www.omdbapi.com/) and handling user-authentication using [Auth0](https://auth0.com/)

![screenshot](https://github.com/traptrick/react-omdb-app/blob/master/screenshot.png)

## Tools

Key tools used in this React project are:

|                             Tool                              | Description                                           |
| :-----------------------------------------------------------: | ----------------------------------------------------- |
|      [React](http://facebook.github.io/react/index.html)      | A JavaScript library for building user interfaces.    |
|                [Redux](https://redux.js.org/)                 | A Predictable State Container for JS Apps             |
|            [Axios](https://github.com/axios/axios)            | Promise based HTTP client for the browser and node.js |
| [React-Router](https://github.com/ReactTraining/react-router) | For Dynamic, Client-Side routing.                     |
|                  [Auth0](https://auth0.com/)                  | Cool Authentication solutions.                        |

## Installation

[node.js](https://nodejs.org/en/) is required to get `npm`.

If you would like to download the source-code & run locally:

1. Clone the repo: `git clone https://github.com/traptrick/react-omdb-app.git`
2. `cd react-omdb-app`
3. Install packages: `npm install`
4. Launch: `npm start`
5. Open your browser at: `http://localhost:3000`

---

##### guidelines for using your own Auth0 keys:

create a environment file in the root project directory named
`.env`
and replace your key values you will be getting when creating app on AUTH0 using the following template:

```
    REACT_APP_AUTH0_DOMAIN=YOUR_DOMAIN_KEY_HERE
    REACT_APP_AUTH0_CLIENT_ID=YOUR_CLIENT_ID_HERE

```

##### Author

[Manish Kumar](https://github.com/traptrick/)
