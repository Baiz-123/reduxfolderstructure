export const transactionReducer = (state, action) => {
    var list = JSON.parse(localStorage.getItem('transactions'))
    switch (action.type) {
        case 'INSERT':
            list.push(action.payload)
            localStorage.setItem('transactions', JSON.stringify(list))
            return { list, currentIndex: -1 }
        
        default:
            return state;
    }

}



export default transactionReducer