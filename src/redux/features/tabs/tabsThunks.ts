import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITab } from "../../../typescript/entities";
import { apiProvider } from "../../../api/api";

export const getTabs = createAsyncThunk<ITab[], undefined>(
  'tabs/get',
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiProvider.request<ITab[]>({
        method: 'get',
        url: `/tabs`,
        headers: {
          'Content-Type': 'application/json',
        },
      })

      return response.data
    } catch
      (err) {
      return rejectWithValue(err)
    }
  }
)