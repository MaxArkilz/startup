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
import { Recipe } from './cookbook/recipes/recipe';
import { Signup } from './signup/signup';
import logo from './resippyIcon.png';

export default function App() {
    return (
        <BrowserRouter>
            <>
            <header>
                <div>
                    <NavLink to="/" className='logo'>
                        <img src={logo} className='logo' />
                    </NavLink>
                </div>
                <nav>
                    <input type="checkbox" id="menuToggle" className="menuToggle" />
                    <label htmlFor="menuToggle" className="menuIcon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                    <ul className='siteNavigation'>
                    
                        <li><NavLink className='navbar' to="/mealplan">Meal Plan</NavLink></li>
                        <li><NavLink className='navbar' to="/cookbook">Cookbook</NavLink></li>
                        <li><NavLink className='navbar' to="/shopping">Shopping List</NavLink></li>
                        <li><NavLink className='navbar' to="/about">About</NavLink></li>
                        <li>
                            <NavLink className='loginLink' to='/'><button className='loginButton'>Login</button></NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/mealplan" element={<MealPlan />} />
                <Route path="/cookbook" element={<Cookbook />} />
                <Route path="/cookbook/:id" element={<Recipe />} />
                <Route path="/shopping" element={<Shopping/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/signup" element={<Signup />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            </>
        </BrowserRouter>
    )
}

function NotFound() {
    return <main>404: Return to sender. Address unknown.</main>;
  }

