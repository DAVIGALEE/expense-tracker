import {configureStore} from '@reduxjs/toolkit';
import transactionReducer from './reducers/transactionReducer'


 const store = configureStore({
    reducer:{
        add : transactionReducer
    }
});
 const saveToLocalStorage = (state) => {
    try {
      console.log(state)
        let data = state.add.transactionList
        localStorage.setItem('state', JSON.stringify(data));
      } 
      catch (e) {
        console.error(e);
      }
}


store.subscribe(() => {
    saveToLocalStorage(store.getState());
  });
  
export default store;