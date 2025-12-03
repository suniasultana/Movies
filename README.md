movie-explorer/
│
├── public/
│ ├── index.html
│ ├── fallback.jpg # Fallback image for missing posters
│ └── favicon.ico
│
├── src/
│ ├── api/
│ │ └── tmdb.js # TMDB API functions
│ │
│ ├── components/
│ │ ├── Header.js # Navigation + Search bar
│ │ └── MovieCard.js # Reusable movie card component
│ │
│ ├── pages/
│ │ ├── Homepage.js
│ │ ├── MoviePage.js
│ │ ├── SearchPage.js
│ │ ├── NotFoundPage.js
│ │ │
│ │ └── movie/ # Movie details tabs
│ │ ├── CastTab.js
│ │ ├── OverviewTab.js
│ │ ├── ReviewsTab.js
│ │ └── MovieDetails.js
│ │
│ ├── styles.css # Main global CSS
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ └── index.css
│
├── .env # API key (ignored in Git)
├── package.json
└── README.md


Project Features
 1. Trending Movies

Fetch trending movies from TMDB

Display posters in a responsive grid

Smooth dark theme UI

2. Search Movies

Search instantly by text

Fully integrated with TMDB’s search API

 3. Movie Details Page

Overview

Cast tab

Reviews tab

High-quality poster

Clean Netflix-style layout

 4. Fallback Image Support

If poster is missing or fails to load

Uses public/fallback.jpg automatically

5. Routing

Built with React Router

Separate pages for Home, Search, Movie, Not Found

6. Fully Responsive

Works on mobile, tablet, and desktop

 Environment Variables 

Create a .env file in the root of the project:

REACT_APP_TMDB_API_KEY=your_dummy_api_key_here
REACT_APP_TMDB_BASE_URL=https://api.themoviedb.org/3
REACT_APP_TMDB_IMAGE_URL=https://image.tmdb.org/t/p/w500


 React requires variables to start with REACT_APP_

Example config.js (optional)
export const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
export const BASE_URL = process.env.REACT_APP_TMDB_BASE_URL;
export const IMAGE_URL = process.env.
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
