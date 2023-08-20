import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCommitDetailsUrl } from "config/apiUrls";
import { ICommit } from "interfaces";

type TCommitDetailState = {
  data: ICommit | null;
  loading: boolean;
  error: string | null;
};

const initialState: TCommitDetailState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchCommitDetail = createAsyncThunk(
  "commitDetail",
  async ({
    owner,
    repo,
    commitId,
  }: {
    owner: string;
    repo: string;
    commitId: string;
  }) => {
    const response = await fetch(getCommitDetailsUrl(owner, repo, commitId));
    return response.json();
  }
);

const commitsSlice = createSlice({
  name: "commitDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommitDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCommitDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCommitDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch posts";
      });
  },
});

export default commitsSlice.reducer;
