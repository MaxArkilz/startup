import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { NavLink, Routes } from 'react-router-dom';
import { BrowserRouter, Route } from "react-router-dom";
import {About} from "./about/about";
import {MealPlan} from "./mealPlan/mealplan";
import {Cookbook} from "./cookbook/cookbook";
import {Shopping} from "./shopping/shopping";
import {Login} from "./login/login";

export default function App() {
    return (
        <BrowserRouter>
            <>
            <nav>
                <ul>
                    <li><NavLink className='navbar' to="/">Login</NavLink></li>
                    <li><NavLink className='navbar' to="/mealplan">Meal Plan</NavLink></li>
                    <li><NavLink className='navbar' to="/cookbook">Cookbook</NavLink></li>
                    <li><NavLink className='navbar' to="/shopping">Shopping List</NavLink></li>
                    <li><NavLink className='navbar' to="/about">Home</NavLink></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/mealplan" element={<MealPlan />} />
                <Route path="/cookbook" element={<Cookbook />} />
                <Route path="/shopping" element={<Shopping/>} />
                <Route path="/about" element={<About/>} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            </>
        </BrowserRouter>
    )
}

function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
  }

