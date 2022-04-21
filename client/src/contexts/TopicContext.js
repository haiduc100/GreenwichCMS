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

    const getAllTopic = async () => {
        try {
            const response = await axios.get(`${apiUrl}/Category`)
            if (response.status === 200) {
                dispatch({
                    type: 'GET_ALL_TOPICS',
                    payload: response.data
                })
            }
        } catch (e) {
            console.log(e.response.data);
        }
    }

    const createNewTopic = async title => {
        try {
            const response = await axios.post(`${apiUrl}/Category`, title)
            if (response.status === 200) {
                dispatch({
                    type: 'CREATE_NEW_TOPIC',
                    payload: response.data
                })
                return response
            }
        } catch (error) {
            return error.response.data
        }
    }

    const findTopic = id => {
        const findTopic = topicState.topics.find(topic => topic.ideaCategoryId === id);
        dispatch({ type: 'FIND_TOPIC', payload: findTopic });
    }

    const updateTopic = async updateUserForm => {
        try {
            const response = await axios.put(`${apiUrl}/Category`, updateUserForm)
            if (response.status === 200) {
                dispatch({
                    type: 'UPDATE_TOPIC',
                    payload: response.data
                });
                return response;
            }
        } catch (error) {
            return error.response.data;
        }
    }

    const deleteTopic = async id => {
        console.log('jdksajlk');
        try {
            const response = await axios.delete(`${apiUrl}/Category?id=${id}`)
            if (response.status === 200) {
                dispatch({
                    type: 'DELETE_TOPIC',
                    payload: id
                })
                return response.data
            }
        } catch (error) {
            return error.response.data
        }
    }

    const topicData = {
        topicState,
        createNewTopic,
        getAllTopic,
        findTopic,
        updateTopic,
        deleteTopic
    }

    return (
        <TopicContext.Provider value={topicData}>
            {children}
        </TopicContext.Provider>
    )
}

export default TopicContextProvider;