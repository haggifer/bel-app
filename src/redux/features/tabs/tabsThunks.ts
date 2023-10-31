import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITab } from "../../../typescript/entities";

export const getTabs = createAsyncThunk<ITab[], undefined>(
  'tabs/get',
  async (_, { rejectWithValue }) => {
    try {
      await new Promise((res, rej) => setTimeout(res, 1000))

      // Get data from API
      // const response = await apiProvider.request<ITab[]>({
      //   method: 'get',
      //   url: `/tabs`,
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // })
      //
      // return response.data

      return [
        { "id": "sectionA", "title": "Section A", "order": 2, "path": "tabs/SectionA.tsx" },
        { "id": "sectionB", "title": "Section B", "order": 4, "path": "tabs/SectionB.tsx" },
        { "id": "sectionC", "title": "Section C", "order": 5, "path": "tabs/SectionC.tsx" },
        { "id": "sectionD", "title": "Section D", "order": 1, "path": "tabs/SectionD.tsx" },
        { "id": "sectionE", "title": "Section E", "order": 3, "path": "tabs/SectionX.tsx" }
      ]
    } catch
      (err) {
      return rejectWithValue(err)
    }
  }
)