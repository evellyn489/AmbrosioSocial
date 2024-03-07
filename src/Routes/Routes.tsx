import { BrowserRouter, Routes, Route  } from "react-router-dom";

import { InitialRegister } from "../pages/InitialRegister";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Explore } from "../pages/Explore";
import { ForgotPassword } from "../pages/ForgotPassword";
import { Profile } from "../pages/Profile";
import { Settings } from "../pages/Settings";
import { EditData } from "../pages/EditData";

export function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<InitialRegister />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/forgotpassword" element={<ForgotPassword />}/>
                <Route path="/explore" element={<Explore />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/settings" element={<Settings />}/>
                <Route path="/editdata" element={<EditData />}/>
            </Routes>
        </BrowserRouter>
    );
}