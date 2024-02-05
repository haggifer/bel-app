import { ITabsState } from '../../../typescript/states';
import { createSlice } from '@reduxjs/toolkit';
import { getTabs } from './tabsThunks';
import _ from 'lodash';

const initialState: ITabsState = {
  data: null,
  loading: false,
  error: null,
};

export const tabsSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTabs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTabs.fulfilled, (state, { payload }) => {
        const data: ITabsState['data'] = [];

        payload.forEach((tab) => {
          // To not allow tabs with empty and repetitive ID's or same order
          if (
            tab.id &&
            !data.find((searchTab) => searchTab.id === tab.id) &&
            !data.find((searchTab) => searchTab.order === tab.order)
          ) {
            data.push(tab);
          }
        });

        state.data = _.sortBy(data, 'order');

        state.loading = false;
      })
      .addCase(getTabs.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const {} = tabsSlice.actions;
