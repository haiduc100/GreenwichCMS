import { createContext, useReducer } from 'react';
import { IdeaReducer } from '../reducer/IdeaReducer';
import { apiUrl } from './Constant'
import axios from 'axios';

export const IdeaContext = createContext();

const IdeaContextProvider = ({ children }) => {
    const [ideaState, dispatch] = useReducer(IdeaReducer, {
        idea: null,
        ideas: []
    })

    const getAllIdea = async () => {
        try {
            const response = await axios.get(`${apiUrl}/Idea`)
            if (response.status === 200) {
                dispatch({
                    type: 'GET_ALL_IDEAS',
                    payload: response.data.listIdeas
                })
            }
        } catch (e) {
            console.log(e.response.data);
        }
    }

    const createNewIdea = async ideaForm => {
        try {
            const response = await axios.post(`${apiUrl}/Idea`, ideaForm, {
                headers: {
                    'content-type': 'multipart/form-data',
                }
            })
            if (response.status === 200) {
                dispatch({
                    type: 'CREATE_NEW_IDEA',
                    payload: response.data
                })
                return response
            }
        } catch (error) {
            return error.response.data
        }
    }

    const findIdea = id => {
        const findIdea = ideaState.ideas.find(idea => idea.id === id);
        dispatch({ type: 'FIND_IDEA', payload: findIdea });
    }

    const viewIdeaByCategoryName = async name => {
        try {
            const response = await axios.get(`${apiUrl}/Idea/${name}`)
            if (response.status === 200) {
                dispatch({
                    type: 'VIEW_IDEA_BY_CATEGORY',
                    payload: response.data
                })
                return response.data
            }
        } catch (error) {
            return error.response.data
        }
    }

    const downloadFile = async id => {
        try {
            const res = await axios.get(`${apiUrl}/Idea/download/${id}`, {
                headers: {
                    'Content-Type': 'application/pdf',
                },
            })
            return res.data
        } catch (error) {
            console.log(error.response.data);
        }
    }

    const ideaData = {
        ideaState,
        getAllIdea,
        createNewIdea,
        findIdea,
        viewIdeaByCategoryName,
        downloadFile
    }

    return (
        <IdeaContext.Provider value={ideaData}>
            {children}
        </IdeaContext.Provider>
    )
}

export default IdeaContextProvider;