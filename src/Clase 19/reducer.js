export const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_USER':
            return {users: [...state.users, action.payload]}
        case 'DELETE_USER': 
            return {}
        default:
            throw new Error()
    }
  }