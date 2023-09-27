import { useState } from "react";
import "../Styles/Login.css"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

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

        const response = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        })

        // const data = await response.json();

        if (!response.ok) {
            console.log("Error in logging in");
            console.log(response);
        }
        if (response.ok) {
            setUsername("");
            setPassword("");
            console.log("Logged in");
            console.log(response);
        }
    }

    return (
        <>
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
                </form>
            </div>
        </>
    )
}

export default Login;