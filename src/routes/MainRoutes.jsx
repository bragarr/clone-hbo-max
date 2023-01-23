import { Routes, Route } from "react-router-dom";
import { LandPage } from '../pages/Landpage/LandPage';
import { SignIn } from '../pages/SignIn/SignIn';
import { SignUp } from '../pages/SignUp/SignUp';

export function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandPage />}></Route>
            <Route path="/signIn" element={<SignIn />}></Route>
            <Route path="/signUp" element={<SignUp />}></Route>
        </Routes>
    );
};