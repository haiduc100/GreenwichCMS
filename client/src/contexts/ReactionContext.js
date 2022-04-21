import { createContext, useReducer } from 'react';
import { ReactionReducer } from '../reducer/ReactionReducer';
import { apiUrl } from './Constant'
import axios from 'axios';

export const ReactionContext = createContext();

const ReactionContextProvider = ({ children }) => {

    const [reactionState, dispatch] = useReducer(ReactionReducer, {
        like: 0,
        reactions: []
    })

    const getReactionByUser = async (userId) => {
        try {
            const res = await axios.get(`${apiUrl}/Reaction/UserId?id=${userId}`)
            if (res.status === 200) {
                dispatch({
                    type: 'GET_REACTION_BY_USER',
                    payload: res.data
                })
            }
        } catch (e) {
            console.log(e.response.data);
        }
    }

    const PostReaction = async reactionForm => {
        try {
            await axios.post(`${apiUrl}/Reaction`, reactionForm)
        } catch (error) {
            return error.response.data
        }
    }

    const deleteReaction = async reaction => {
        try {
            await axios.delete(`${apiUrl}/Reaction`, {
                data: reaction,
                headers: {
                    contentType: 'application/json'
                },
            })
        } catch (error) {
            return error.response.data
        }
    }

    const reactionData = {
        reactionState,
        getReactionByUser,
        PostReaction,
        deleteReaction
    }

    return (
        <ReactionContext.Provider value={reactionData}>
            {children}
        </ReactionContext.Provider>
    )
}

export default ReactionContextProvider;