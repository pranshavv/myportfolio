import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import Home from "./home";
import Login from "../../Login/Login";

const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => onAuthStateChanged(auth, setUser), []);
    return(
        <div>
        {user ? <Home/> : <Login/>}
        </div>
    )
}

export default Dashboard;