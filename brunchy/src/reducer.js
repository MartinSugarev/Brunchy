 const reducer = (initialState, action) => {
    switch (action.type) {
        case 'add':
            return {items: [...initialState.items, action.payload], price: action.payload.price + initialState.price};
        case 'clear':
            return {items: [], price: 0};       
        default:
            break;
    }
}

export default reducer