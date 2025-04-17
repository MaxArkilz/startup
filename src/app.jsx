import React from 'react';
import './app.css';
import { NavLink, Routes } from 'react-router-dom';
import { BrowserRouter, Route } from "react-router-dom";
import {About} from "./about/about";
import { MealPlan } from "./mealPlan/mealplan";
import {Cookbook} from "./cookbook/cookbook";
import {Shopping} from "./shopping/shopping";
import {Login} from "./login/login";
import { Signup } from './signup/signup';
import { AuthState } from './login/authState'
import logo from './resippyIcon.png';

export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    return (
        <BrowserRouter>
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
                        {authState === AuthState.Authenticated && (
                            <li><NavLink className='navbar' to="/mealplan">Meal Plan</NavLink></li>
                        )}
                        {authState === AuthState.Authenticated && (
                            <li><NavLink className='navbar' to="/cookbook">Cookbook</NavLink></li>
                        )}
                        {authState === AuthState.Authenticated && (
                            <li><NavLink className='navbar' to="/shopping">Shopping List</NavLink></li>
                        )}
                        <li><NavLink className='navbar' to="/about">About</NavLink></li>
                        <li>
                            <NavLink className='loginLink' to='/'><button className='loginButton'>Login</button></NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Login 
                    userName={userName}
                    authState={authState}
                    onAuthChange={(userName, authState) => {
                        setAuthState(authState);
                        setUserName(userName);
                    }}
                    />
                    }t
                    exact
                     />
                <Route path="/mealplan" element={<MealPlan />} />
                <Route path="/cookbook" element={<Cookbook />} />
                <Route path="/shopping" element={<Shopping userName={userName}
                    authState={authState}
                    onAuthChange={(userName, authState) => {
                        setAuthState(authState);
                        setUserName(userName);
                    }}/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/signup" element={<Signup />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <footer>
                <span className='footerWords'>Created by Abrahm Bloomquist</span>
                <div className='footerWords'>
                    <a href='https://github.com/MaxArkilz/startup'>GitHub Source</a>
                </div>
           </footer>
        </BrowserRouter>
    );
}

function NotFound() {
    return <main>404: Return to sender. Address unknown.</main>;
  }