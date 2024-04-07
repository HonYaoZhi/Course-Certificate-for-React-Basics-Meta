# Course-Certificate-for-React-Basics-Meta

## How to Create React App

Whether you’re using React or another library, Create React App lets you focus on code, not build tools.

To create a project called my-app, run this command:

```bash
npx create-react-app my-app
```

- - - -

## The React project structure

When you build a React app using the command npm init React app, there are three folders 
- node_modules :   Includes all of the dependency-related code that Create React App has installed.
- public :         Contains the assets that will be displayed to the user.
- src :            Contains all the essential component files required.

Breakdown of the project structure are as below:

Folder name   | Files name     | Details
------------- | -------------  | -------------
public        | favicon.ico    | Displays an icon in the browser tab.
public        | index.html     | Imports all the necessary components for this React app.
public        | manifest.json  | Provide metadata to a device when React powered web app is installed.
public        | robots.txt     | For search engine optimization.
src           | index.js       | Imports everything that this app needs to render a working React app.
src           | index.css      | Contains the styles to use in the entire app.
src           | app.js         | Render the root components of the app.
src           | app.css        | Contains the styles for the app.js components.
src           | App.test.js    | Related to the app's performance and testing.
src           | reportsWebVitals.js  | Related to the app's performance and testing.
src           | setupTests.js  | Related to the app's performance and testing.
root          | .gitignore     | Specify what files and folders must be excluded from a project.
root          | package-loc.json     |  Holds the list of all dependencies with specific versions. Helps npm rebuild the app on another machine.
root          | package.json   | Contains information about the app, allowing npm to run several scripts and perform various tasks.
root          | README.md      | Gives basic information on this project.


- - - -

## How to Run your React Project

Once you have dragged your project into your code editor, you can open up your terminal (in VSCode, go to View > Terminal).

To start your React project, you can simply run:

```bash
npm start
```

When we run our project, a new browser tab will automatically open on our computer's default browser to view our app.

The development server will start up on localhost:3000 and, right away, we can see the starting home page for our app.
