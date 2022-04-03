import { createContext, useReducer } from 'react';
import { TopicReducer } from '../reducer/TopicReducer';
import { apiUrl } from './Constant'
import axios from 'axios';

export const TopicContext = createContext();

const TopicContextProvider = ({ children }) => {

    const [topicState, dispatch] = useReducer(TopicReducer, {
        topic: null,
        topics: []
    })

    // const getAllUsers = async () => {
    //     try {
    //         const response = await axios.get(`${apiUrl}/Users`)
    //         if (response.status === 200) {
    //             dispatch({
    //                 type: 'GET_ALL_USER',
    //                 payload: response.data.listUsers
    //             })
    //         }
    //     } catch (e) {
    //         console.log(e.response.data);
    //     }
    // }

    const createNewTopic = async topicForm => {
        try {
            const response = await axios.post(`${apiUrl}/Category`, topicForm)
            console.log(response);
            if (response.status === 200) {
                dispatch({
                    type: 'CREATE_NEW_TOPIC',
                    payload: response.data
                })
                return response.data
            }
        } catch (error) {
            return error.response.data
        }
    }

    const topicData = {
        topicState,
        createNewTopic
    }

    return (
        <TopicContext.Provider value={topicData}>
            {children}
        </TopicContext.Provider>
    )
}

export default TopicContextProvider;