import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css"
import { ReactSVG } from "react-svg";
import { loginUser } from "../hooks/userHook";
import { useAuthContext } from "../hooks/useContext";

import { MdOutlineAddTask } from "react-icons/md";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { dispatch } = useAuthContext();
    
    const navigate = useNavigate();

    const loginCriteria = [
        {
            id: 0,
            type: "text",
            value: username,
            placeholder: "Username",
            func: e => setUsername(e.target.value) 
        },
        {
            id: 1,
            type: "password",
            value: password,
            placeholder: "Password",
            func: e => setPassword(e.target.value)
        }
    ]

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (username === "" || password === "") {
            alert("Please fill in all fields");
            return;
        }

        const loginData = {
            username,
            password
        }

        const response = await loginUser(loginData);
        const json = await response.json();
        
        if (!response.ok) {
            // console.log("Error in logging in");
            // console.log(response);
            alert("Incorrect username or password");
        }
        if (response.ok) {
            dispatch({ type: "LOGIN", payload: { user: json.username, token: json.token } });

            setUsername("");
            setPassword("");
        }
    }

    return (
        <>

            <div className="login-header">
                <div className="logo" onClick={() => navigate("/")}>
                    <MdOutlineAddTask className="logo-icon" size={60}/>
                </div>
            </div>

            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    {loginCriteria.map((c) => (
                        <input 
                            key={c.id}
                            type={c.type}
                            value={c.value}
                            placeholder={c.placeholder}
                            onChange={c.func}
                        />
                        )
                    )}
                    <button type="submit">Login</button>

                    <div className="register-link">
                        Don't have an account?
                        <p className="redirect-link" onClick={() => navigate("/Register")}>Register</p>
                    </div>

                    <div className="forgot-password">
                        {/* <p className="redirect-link" onClick={() => navigate("/ForgotPassword")}>Forgot Password?</p> */}
                        <p onClick={() => {alert("Then try to remeber it")}}>Forgot your password?</p>
                    </div>
                </form>

                

                <div className="login-image">
                    <ReactSVG className="login-svg" src="/undraw_to_do_list_re_9nt7.svg" />
                </div>
            </div>

            
        </>
    )
}

export default Login;