import { createContext, useReducer, useEffect } from "react";
import { AuthReducer } from "../reducer/AuthReducer";
import setAuthToken from '../utils/setAuthToken'
import axios from "axios";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME, USER_ID } from "./Constant";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [authState, dispatch] = useReducer(AuthReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null,
    })

    const loadUser = async (id) => {
        if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
            setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME])
            try {
                const response = await axios.get(`${apiUrl}/Users/${id}`)
                if (response.status === 200) {
                    console.log("ok")
                    dispatch({
                        type: 'SET_AUTH', payload: {
                            isAuthenticated: true,
                            user: response.data
                        }
                    })
                }
            } catch (error) {
                localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
                setAuthToken(null)
                dispatch({
                    type: 'SET_AUTH', payload: {
                        isAuthenticated: false,
                        user: null
                    }
                })
            }
        }

    }

    useEffect(() => {
        const id = localStorage.getItem(USER_ID)
        loadUser(id)
    }, [])

    const loginUser = async userForm => {
        try {
            const response = await axios.post(`${apiUrl}/account/Login`, userForm)
            if (response.status === 200) {
                const id = response.data.user.userId
                localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.token);
                localStorage.setItem(USER_ID, id);
                await loadUser(id);
            }
            return response.data
        } catch (error) {
            return error.response.data
        }
    }

    const logoutUser = () => {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME)
        localStorage.removeItem(USER_ID)
        dispatch({
            type: 'SET_AUTH', payload: {
                isAuthenticated: false,
                user: null
            }
        })
    }

    const AuthData = {
        authState,
        loginUser,
        logoutUser
    }

    return (
        <AuthContext.Provider value={AuthData}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;