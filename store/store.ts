import { configureStore } from '@reduxjs/toolkit'

import myTodo from './todoslice'

const store = configureStore({
    reducer: {
    
     myTodo,
    }
});


export default store;
