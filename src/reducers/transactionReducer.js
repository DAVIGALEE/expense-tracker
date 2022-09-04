const initialState = {
    transactionList:[],
}
 const transactionReducer = (state = initialState,action) => {
    switch(action.type){
            case 'add_transaction':
                return {
                    ...state,
                    transactionList:[action.payload,...state.transactionList]
                }
            case 'delete_transaction':
                return{
                    ...state,
                    transactionList:[
                        ...state.transactionList.slice(0, action.payload),
                        ...state.transactionList.slice(action.payload + 1)
                    ]
                }
    }

    return state;
}

export default transactionReducer;