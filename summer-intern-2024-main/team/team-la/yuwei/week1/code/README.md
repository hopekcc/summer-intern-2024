# TodoList Project
<img src="./img/demo.png" alt="demo image" width="300"/>

## Overview
This TodoList project is built using React and TypeScript, showcasing the use of functional components, hooks, and state management. The project allows users to add, delete, and mark tasks as complete. It also features a search functionality to filter through tasks.

## Features
- **Add Tasks:** Users can add new tasks to their list.
- **Delete Tasks:** Users can remove tasks they no longer need.
- **Mark Tasks as Complete:** Users can check off tasks they have finished.
- **Search Functionality:** Users can filter tasks based on text input, making it easier to find specific tasks.

## Technologies Used
- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
- **CSS:** For styling the components.

## Project Structure
- `App.tsx`: The main component that renders the TodoList.
- `TodoList.tsx`: Contains the TodoList component along with Task, TaskList, AddButton, DeleteButton, SearchBar, and TaskGenerator components.
- `App.css`: Styles for the App component.
- `TodoList.css`: Styles for the TodoList and its child components.

## Getting Started
To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd todolist-project
npm install
npm run dev
```

--------------
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
