import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "../../Pages/Auth";
import LandingPage from "../../Pages/LandingPage/LandingPage";


const AppRoute = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/Login" element={<Auth />} />
                <Route exact path="/" element={<LandingPage/>} />
            </Routes>
        </Router>
    )
}
export default AppRoute;