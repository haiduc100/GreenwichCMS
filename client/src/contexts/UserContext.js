import { createContext, useReducer } from 'react';
import { UserReducer } from '../reducer/UserReducer';
import { apiUrl } from './Constant'
import axios from 'axios';

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {

    const [userState, dispatch] = useReducer(UserReducer, {
        user: null,
        users: []
    })

    const getAllUsers = async () => {
        try {
            const response = await axios.get(`${apiUrl}/Users`)
            if (response.status === 200) {
                dispatch({
                    type: 'GET_ALL_USER',
                    payload: response.data.listUsers
                })
            }
        } catch (e) {
            console.log(e.response.data);
        }
    }

    const createNewUser = async userForm => {
        try {
            const response = await axios.post(`${apiUrl}/Users`, userForm)
            if (response.status === 200) {
                console.log(response);
                dispatch({
                    type: 'CREATE_NEW_USER',
                    payload: response.data
                })
                return response.data
            }
        } catch (error) {
            return error.response.data
        }
    }

    const userData = {
        userState,
        getAllUsers,
        createNewUser
    }

    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;