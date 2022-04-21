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
                dispatch({
                    type: 'CREATE_NEW_USER',
                    payload: response.data
                })
                return response
            }
        } catch (error) {
            return error.response.data
        }
    }

    const findUser = id => {
        const findUser = userState.users.find(user => user.userId === id);
        dispatch({ type: 'FIND_USER', payload: findUser });
    }

    const updateUser = async updateUserForm => {
        try {
            const response = await axios.put(`${apiUrl}/Users`, updateUserForm)
            if (response.status === 200) {
                dispatch({
                    type: 'UPDATE_USER',
                    payload: response.data
                });
                return response;
            }
        } catch (error) {
            return error.response.data;
        }
    }

    const deleteUser = async id => {
        try {
            const response = await axios.delete(`${apiUrl}/Users?id=${id}`);
            if (response.status === 200) {
                dispatch({
                    type: 'DELETE_USER',
                    payload: id
                });
            }
        } catch (error) {
            return error.response.data;
        }
    }

    const searchUser = async id => {
        try {
            const response = await axios.get(`${apiUrl}/Users/${id}`);
            if (response.status === 200) {
                dispatch({
                    type: 'SEARCH_USER',
                    payload: response.data
                });
                return response
            }
        } catch (error) {
            return error.response.data;
        }
    }

    const userData = {
        userState,
        getAllUsers,
        createNewUser,
        findUser,
        updateUser,
        deleteUser,
        searchUser
    }

    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;