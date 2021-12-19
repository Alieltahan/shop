<!-- prettier-ignore -->
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Structure:

├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # App Icon.
│   └── index.html # DO NOT MODIFY
└── src

    ├── components # container for all the developped files.
        ├── media # container for the images/icons.
        └── svg # container for all the SVG icons.
            ├── cart.svg # Black cart Icon.
            ├── EmptyCart-whote.svg # White cart icon.
            ├── logo.svg # Website Logo.
            └── arrow.svg # Currency arrow svg.
        ├── http # Container for HTTP requests.
            └── graphql.js # Contain All The GraphQL Queries.
        ├── layout # container for the Layout design components.
            ├── Pages # Contain the pages componenets.
                ├── Cart.js # Full View Cart Page.
                ├── PDP.js # Product Description Page.
                ├── PLP.js # Product List Page.
                └── 404.js Not Found Page.
            ├── store # REDUX Store files.
                ├── confStore.js # Configuration of Redux Store.
                ├── RootReducer.js # Combining All The Reducers.
                └── currency.js # Currency State Reducer.
            ├── Header.js # Containing the Header Components.
            └── Main.js # Containing the Body Components.
        ├── Currencies.js # The List of Currencies UL in the Header.
        ├── NavBar.js # Container for the Components in the Navbar.
        ├── ProductCard.js # Displaying the Product Into a Card.
        └── Products.js # Container for all the Products.
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── components # container for all the components.
        ├── LoginPage.js #
            ├── NavBar.js #
            ├── Dashboard.js #
                ├── Questions.js #
                    ├── AnsweredQ.js #
                    └──  UnAnsweredQ.js #
                        └──RenderQ.js
                └── QUESTION DETAILS....
            └── LeaderBoard.js #
        ├── store # container for the redux store's files
                └── middleware.js #
                    └── api.js # file for calling backend functions.
            ├── confStore.js # Redux Store
            ├── rootReducer.js # Combining users/questions reducers
            ├── users.js # users reducer
            ├── auth.js # authentication & logged in user reducer
            └── questions.js # questions reducer
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── _DATA.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

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
