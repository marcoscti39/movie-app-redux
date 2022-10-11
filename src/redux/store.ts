import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import contentReducer from "./contentDetailSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    contentDetail: contentReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
