import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./userSlice"

// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//     whitelist: ['user'],
//   };

//   const rootReducer = combineReducers({
//     user: userReducer,
//   });

//   const persistedReducer = persistReducer(persistConfig, rootReducer);

//   export const store = configureStore({
//   reducer: persistedReducer
//   },

export const store = configureStore({
    reducer: {
      user: userReducer
  
    },


// export const store = configureStore({
//   reducer: {
//     user: userReducer

//   },
})

