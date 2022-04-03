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
        default:
            return state;
    }
}