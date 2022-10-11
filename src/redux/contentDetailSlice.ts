import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ContentDescriptionType {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: [
    {
      Source: string;
      Value: string;
    }
  ];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface initialStateType {
  value: ContentDescriptionType | {};
}

const initialState = {
  value: {} as ContentDescriptionType,
};

export const fetchContentDetail = createAsyncThunk(
  "contentDetail/fetchContentDetail",
  async (contentId: string) => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=b1548fa4&i=${contentId}`
    );
    const data: ContentDescriptionType = await response.json();
    return data;
  }
);

export const contentDetailSlice = createSlice({
  name: "contentDetail",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchContentDetail.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export default contentDetailSlice.reducer;
