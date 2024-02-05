import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { tabsSlice } from './features/tabs/tabsSlice';

export const store = configureStore({
  reducer: {
    tabs: tabsSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
