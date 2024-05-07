import {configureStore} from '@reduxjs/toolkit';
import userSlice from './user/userSlice';
import newsSlice from './news/newsSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    news: newsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
