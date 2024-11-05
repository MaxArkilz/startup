import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
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
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/mealplan">Meal Plan</Link></li>
                    <li><Link to="/cookbook">Cookbook</Link></li>
                    <li><Link to="/shopping">Shopping List</Link></li>
                    <li><Link to="/about">Home</Link></li>
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

