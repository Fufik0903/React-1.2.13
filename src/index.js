import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import store from "./components/redux-store/store";
import {onAddTask} from "./components/redux-store/store";
import {rerenderEntireTree} from "./render";

rerenderEntireTree(store);