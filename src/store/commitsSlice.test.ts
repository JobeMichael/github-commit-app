import { configureStore } from "@reduxjs/toolkit";
import commitsReducer, { fetchCommits } from "./commitsSlice";

describe("commitsSlice", () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        commits: commitsReducer,
      },
    });
  });

  it("should handle fetchCommits.pending", () => {
    store.dispatch(fetchCommits({ owner: "user", repo: "repo" }));
    const state = store.getState().commits;

    expect(state.loading).toBe(true);
    expect(state.error).toBeNull();
  });

  it("should handle fetchCommits.fulfilled", () => {
    const mockCommits = [
      { id: 1, message: "Commit 1" },
      { id: 2, message: "Commit 2" },
    ];
    store.dispatch(
      fetchCommits.fulfilled(mockCommits, "", { owner: "user", repo: "repo" })
    );
    const state = store.getState().commits;

    expect(state.loading).toBe(false);
    expect(state.data).toEqual(mockCommits);
  });

  it("should handle fetchCommits.rejected", () => {
    const mockError = { message: "Error message", name: "Error name" };
    store.dispatch(
      fetchCommits.rejected(mockError, "", { owner: "user", repo: "repo" })
    );
    const state = store.getState().commits;

    expect(state.loading).toBe(false);
    expect(state.error).toEqual(mockError.message);
  });
});
