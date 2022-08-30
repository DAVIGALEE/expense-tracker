const initialState = {
    transactionList:[],
}
 const addTransaction = (state=initialState,action) => {
    switch(action.type){
            case 'add_transaction':
                return {
                    ...state,
                    transactionList:[action.payload,...state.transactionList,]
                }
    }

    return state;
}

export default addTransaction;