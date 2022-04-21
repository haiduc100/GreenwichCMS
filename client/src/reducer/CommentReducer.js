export const CommentReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'GET_COMMENT_BY_IDEA':
            return {
                ...state,
                comments: payload,
            }
        case 'POST_COMMENT':
            return {
                ...state,
                comments: [...state.comments, payload]
            }
        default:
            return state;
    }
}