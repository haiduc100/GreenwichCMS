export const TopicReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'GET_ALL_TOPICS':
            return {
                ...state,
                topics: payload,
            }
        case 'CREATE_NEW_TOPIC':
            return {
                ...state,
                topics: [...state.topics, payload]
            }
        case 'FIND_TOPIC':
            return {
                ...state,
                topic: payload
            }
        case 'UPDATE_TOPIC':
            const newTopics = state.topics.map(topic => topic.ideaCategoryId === payload.ideaCategoryId ? payload : topic)
            return {
                ...state,
                topics: newTopics
            }
        case 'DELETE_TOPIC':
            return {
                ...state,
                topics: state.topics.filter(topic => topic.ideaCategoryId !== payload)
            }
        default:
            return state;
    }
}