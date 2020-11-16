const cartItems = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':{
            return [...state, action.payload ]
            
          }
        case 'REMOVE_FROM_CART': {
            const index = state.findIndex(item => item.id === action.payload.id);
            return state.filter((_, i) => i !== index);
          }
        case 'CLEAR_CART':
        return {
        ...state,
        cartItems: ['']
        }
      }
    return state
}

export default cartItems
