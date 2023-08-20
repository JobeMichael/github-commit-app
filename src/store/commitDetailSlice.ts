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
    try {
      const response = await fetch(getCommitDetailsUrl(owner, repo, commitId));
      if (response.status !== 200) {
        throw new Error("Failed to fetch commit detail");
      }
      return response.json();
    } catch (error) {
      throw new Error("Failed to fetch commit detail");
    }
  }
);

const commitDetailSlice = createSlice({
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

export default commitDetailSlice.reducer;
