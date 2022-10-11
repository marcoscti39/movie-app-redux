import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface MoviesOrSeriesTypes {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface ResponseTypes {
  Search: [MoviesOrSeriesTypes];
  totalResults: string;
  Response: string;
}

export interface InitialValueType {
  value: {
    movies: ResponseTypes;
    series: ResponseTypes;
  };
}

const initialState: InitialValueType = {
  value: {
    movies: {
      Search: [
        {
          Title: "",
          Year: "",
          imdbID: "",
          Type: "",
          Poster: "",
        },
      ],
      totalResults: "",
      Response: "",
    },
    series: {
      Search: [
        {
          Title: "",
          Year: "",
          imdbID: "",
          Type: "",
          Poster: "",
        },
      ],
      totalResults: "",
      Response: "",
    },
  },
};

export const fetchMoviesForMainPage = createAsyncThunk(
  "movie/fetchMoviesForMainPage",
  async () => {
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=b1548fa4&s=harry%20potter"
    );
    const data = await response.json();
    return data;
  }
);

export const fetchSeriesForMainPage = createAsyncThunk(
  "movie/fetchSeriesForMainPage",
  async () => {
    const response = await fetch(
      "https://www.omdbapi.com/?apikey=b1548fa4&s=friends"
    );
    const data = await response.json();
    return data;
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchMoviesForMainPage.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value.movies = action.payload;
    });

    builder.addCase(fetchSeriesForMainPage.fulfilled, (state, action) => {
      state.value.series = action.payload;
    });
  },
});

export default movieSlice.reducer;
