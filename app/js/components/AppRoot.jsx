import React from 'react';
import { Provider } from 'react-redux';

import AddTodo from './AddTodo.jsx';
import TodoList from './TodoList.jsx';
import Footer from './Footer.jsx';

import configureStore from "../configureStore";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const store = configureStore();


const TodoApp = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
);

export default (
  <Provider store={store}>
    <BrowserRouter>
      <Switch >
        <Route path="/" component={TodoApp} />
      </Switch>
    </BrowserRouter>
  </Provider>
)