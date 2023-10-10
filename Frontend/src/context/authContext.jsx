import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

export const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN": 
            localStorage.setItem("user", action.payload.user);
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("isAuth", true);
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isAuth: true,
            };

        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                user: null,
                token: null,
                isAuth: false,
            };

        default:
            return state;
    }
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, {
        user: null,
        token: null,
        isAuth: false,
    });

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (user && token) {
            dispatch({
                type: "LOGIN",
                payload: {
                    user,
                    token,
                },
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
}