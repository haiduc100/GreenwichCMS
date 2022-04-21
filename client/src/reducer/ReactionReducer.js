export const ReactionReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'GET_REACTION_BY_USER':
            return {
                ...state,
                reactions: payload,
            }
        case 'POST_REACTION':
            return {
                ...state,
                like: payload ? state.like + 1 : state.like,
                dislike: !payload ? state.dislike + 1 : state.dislike
            }
        default:
            return state;
    }
}