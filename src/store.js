import {configureStore} from '@reduxjs/toolkit';
import addTransaction from './reducers/addTransaction'


 const store = configureStore({
    reducer:{
        add : addTransaction
    }
});
 const saveToLocalStorage = (state) => {
    try {
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