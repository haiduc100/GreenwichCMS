export const UserReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'GET_ALL_USER':
            return {
                ...state,
                users: payload,
            }
        case 'CREATE_NEW_USER':
            return {
                ...state,
                users: [...state.users, payload]
            }
        case 'FIND_USER':
            return {
                ...state,
                user: payload
            }
        case 'UPDATE_USER':
            const newUsers = state.users.map(user => user.userId === payload.userId ? payload : user)
            return {
                ...state,
                users: newUsers
            }
        case 'DELETE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.userId !== payload)
            }
        case 'SEARCH_USER':
            return {
                ...state,
                user: payload,
            }
        default:
            return state;
    }
}