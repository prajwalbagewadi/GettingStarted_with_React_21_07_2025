# React

## What is React ?

### React in Simple Words

React is a JavaScript library used to build fast and interactive websites.

### 🧠 Think of it like this:

- You build your website using small building blocks called components.

- It updates the screen quickly when something changes — without reloading the whole page.

- You write code using a mix of JavaScript + HTML (called JSX).

## using Vite

Vite is a build tool and development server designed to provide a fast and efficient development experience for modern web projects

## create a Vite project

```
npm create vite@latest
```

## Project Setup:

- Project name (ur choice)
- Package name (ur choice)
- Select a framework (React)
- Select a variant (JavaScript)
- Done
- cd Project name
- npm install
- npm run dev

### cmd: npm run dev

npm run dev runs the dev script defined inside your package.json.

It’s commonly used in development mode to:

- Automatically restart the server when files change (with tools like nodemon)
- Start the frontend dev server (like vite, next, or react-scripts)

```
//example
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

## Imp file: package.json

package.json is the heart of any Node.js or JavaScript project — it’s a file that:

- Describes your project
- Lists its dependencies (libraries)
- Defines scripts to run tasks (like start, test, build)
- Specifies metadata (like version, author, license, etc.)

## Getting Started.

### De-clutter unwanted files:

- /src
- /src/assets/react.svg
- /src/App.css
- /src/index.css

## create a hello world React Component:

home.jsx

```
//Alteration 1:
function Home() {
  return <h1>hello world 🌏</h1>;
}
export default Home;
```

```

//Alteration 2:
function Home(){
  return (
    <h1>hello world 🌏</h1>
    <h2>First React component.</h2>
  );
}

export default Home;

//Error:
/*
This will cause an error:
JSX expressions must have one parent element.
*/
```

### Fix: Wrap both elements in a parent element.

You have two sibling elements (<h1> and <h2>) — JSX needs a single enclosing tag.

```
function Home(){
  return (
    <div>
      <h1>hello world 🌏</h1>
      <h2>First React component.</h2>
    </div>
  );
}

export default Home;
```
