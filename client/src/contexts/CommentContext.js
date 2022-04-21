import { createContext, useReducer } from 'react';
import { CommentReducer } from '../reducer/CommentReducer';
import { apiUrl } from './Constant'
import axios from 'axios';

export const CommentContext = createContext();

const CommentContextProvider = ({ children }) => {

    const [commentState, dispatch] = useReducer(CommentReducer, {
        comment: null,
        comments: []
    })

    const getCommentByIdea = async (ideaId) => {
        try {
            const res = await axios.get(`${apiUrl}/comment/ideaId?ideaId=${ideaId}`)
            if (res.status === 200) {
                dispatch({
                    type: 'GET_COMMENT_BY_IDEA',
                    payload: res.data
                })
            }
        } catch (e) {
            console.log(e.response.data);
        }
    }

    const PostComment = async commentForm => {
        try {
            const res = await axios.post(`${apiUrl}/comment`, commentForm)
            if (res.status === 200) {
                dispatch({
                    type: 'POST_COMMENT',
                    payload: res.data
                })
            }
        } catch (error) {
            return error.response.data
        }
    }

    // const findTopic = id => {
    //     const findTopic = topicState.topics.find(topic => topic.ideaCategoryId === id);
    //     dispatch({ type: 'FIND_TOPIC', payload: findTopic });
    // }

    // const deleteTopic = async id => {
    //     try {
    //         const response = await axios.delete(`${apiUrl}/Category/${id}`)
    //         if (response.status === 200) {
    //             dispatch({
    //                 type: 'DELETE_TOPIC',
    //                 payload: id
    //             })
    //             return response.data
    //         }
    //     } catch (error) {
    //         return error.response.data
    //     }
    // }

    const commentData = {
        commentState,
        getCommentByIdea,
        PostComment
    }

    return (
        <CommentContext.Provider value={commentData}>
            {children}
        </CommentContext.Provider>
    )
}

export default CommentContextProvider;