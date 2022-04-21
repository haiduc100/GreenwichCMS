export const IdeaReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'GET_ALL_IDEAS':
            return {
                ...state,
                ideas: payload,
            }
        case 'CREATE_NEW_IDEA':
            return {
                ...state,
                ideas: [...state.ideas, payload]
            }
        case 'FIND_IDEA':
            return {
                ...state,
                idea: payload
            }
        case 'VIEW_IDEA_BY_CATEGORY':
            return {
                ...state,
                ideas: payload
            }
        default:
            return state;
    }
}