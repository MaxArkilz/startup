import { Route } from "react-router-dom"
import {Home} from "./pages/Home"
import {MealPlan} from "./pages/MealPlan"
import {Cookbook} from "./pages/Cookbook"
import {Shopping} from "./pages/Shopping"
import {Login} from "./pages/Login"

function App() {
    return (
        <>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/planning">Meal Plan</Link></li>
                <li><Link to="/cooking">Cookbook</Link></li>
                <li><Link to="/shopping">Shopping List</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planning" element={<MealPlan />} />
            <Route path="/cooking" element={<Cookbook />} />
            <Route path="/shopping" element={<Shopping/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
        </>
    )
}

export default App