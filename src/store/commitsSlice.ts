import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCommitsUrl } from "config/apiUrls";

const initialState: any = {
  commits: [],
  loading: false,
  error: null,
};

export const fetchCommits = createAsyncThunk(
  "commits",
  async ({ owner, repo }: { owner: string; repo: string }) => {
    const response = await fetch(getCommitsUrl(owner, repo));
    if (response.status !== 200) {
      throw new Error("Failed to fetch commits");
    }
    return response.json();
  }
);

const commitsSlice = createSlice({
  name: "commits",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommits.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCommits.fulfilled, (state, action) => {
        state.loading = false;
        state.commits = action.payload;
      })
      .addCase(fetchCommits.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch posts";
      });
  },
});

export default commitsSlice.reducer;
