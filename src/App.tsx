import React, { useState, useEffect} from 'react';
import Card, {CardVariant} from "./component/Сard";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import List from "./component/List";
import UserItem from "./component/UserItem";
import TodoItem from "./component/TodoItem";
import EventsExample from "./component/EventsExample";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import UserPage from "./component/UserPage";
import TodosPage from "./component/TodosPage";
import UserItemPage from "./component/UserItemPage";
import TodoItemPage from "./component/TodoItemPage";

const App = () => {

    return (
        <BrowserRouter>
            <div>
                <div>
                    <NavLink to={'/users'} >Users</NavLink>
                    <NavLink to={'/todos'} >To Do</NavLink>
                </div>
                <Routes>
                    <Route path={'/users'} element={<UserPage/>} />
                    <Route path={'/todos'} element={<TodosPage/>} />
                    <Route path={'/users/:id'} element={<UserItemPage/>} />
                    <Route path={'/todos/:id'} element={<TodoItemPage/>} />

                </Routes>

            </div>
        </BrowserRouter>
    );
};

export default App;
