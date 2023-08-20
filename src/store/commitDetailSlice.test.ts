import { configureStore } from "@reduxjs/toolkit";
import commitDetailReducer, { fetchCommitDetail } from "./commitDetailSlice"; // Adjust the paths as needed

describe("commitDetailSlice", () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        commitDetail: commitDetailReducer,
      },
    });
  });

  it("should handle fetchCommitDetail.pending", () => {
    store.dispatch(
      fetchCommitDetail({ owner: "user", repo: "repo", commitId: "123" })
    );
    const state = store.getState().commitDetail;

    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  it("should handle fetchCommitDetail.fulfilled", () => {
    const mockData = {
      sha: "123",
      message: "Commit message",
    };
    store.dispatch(
      fetchCommitDetail.fulfilled(mockData, "", {
        owner: "user",
        repo: "repo",
        commitId: "123",
      })
    );

    const state = store.getState().commitDetail;

    expect(state.loading).toBe(false);
    expect(state.data).toEqual(mockData);
  });

  it("should handle fetchCommitDetail.rejected", () => {
    const mockError = { message: "Error message" };
    store.dispatch(
      fetchCommitDetail.rejected(
        {
          name: "message",
          message: "Error message",
        },
        "",
        { owner: "user", repo: "repo", commitId: "123" }
      )
    );
    const state = store.getState().commitDetail;

    expect(state.loading).toBe(false);
    expect(state.error).toEqual(mockError.message);
  });
});
