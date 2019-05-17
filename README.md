# React Hooks and Context API with React Native
An experimental idea to manage the global state of React Native components using React Hooks and Context API.

---
### INTRODUCTION
React Hooks and Context API are making simple and efficient global state management for React Native applications. Previously, it is only possible with a third-party state management library such as Redux, Unstated, etc.

[Hooks](https://reactjs.org/docs/hooks-intro.html) are a new addition in React 16.8.x that enable you to use state and many other React features without writing a class. The motivation for Hooks, as provided by the official documentation from the Facebook React team, is that Hooks solve these problems.
1. It is hard to reuse the stateful logic between components
2. Complex components become hard to understand
3. Classes confuse both people and machines

[Context API](https://reactjs.org/docs/context.html) was a part of React for a long time. Context is designed to share data that can be considered “global” for a tree of React components.

---
### HOOKS AND CONTEXT API TOGETHER
This is an example React Native CLI application which uses Hooks and Context API together for global state management. It contains a simple counter and a simple input field. The file structure of the application as follows.

#### File Structure
* android
* ios
* node_modules
* src
     * Components
         * Counter.js
         * User.js
     * Store
         * Context.js
         * CounterState.js
         * UserState.js
* index.js
* StateProvider.js
* App.js
* app.json
* package.json

You don’t need to use any third-party state management library anymore. Everything you need is inside React.
