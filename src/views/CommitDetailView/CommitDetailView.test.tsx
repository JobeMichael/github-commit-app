//@ts-nocheck

import { render, screen } from "CustomRender";
import { useDispatch, useSelector } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import CommitDetailView from "./CommitDetailView"; // Adjust the path as needed

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("CommitDetailView", () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) =>
      callback({
        commitDetail: {
          data: null,
          loading: false,
          error: null,
        },
      })
    );
  });

  it("renders loading message when loading", () => {
    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    useSelector.mockImplementation((callback) =>
      callback({
        commitDetail: {
          data: null,
          loading: true,
          error: null,
        },
      })
    );

    const params = { owner: "owner", repo: "repo", commitId: "commitId" };

    render(
      <MemoryRouter
        initialEntries={[`/${params.owner}/${params.repo}/${params.commitId}`]}
      >
        <Routes>
          <Route
            path="/:owner/:repo/:commitId"
            element={<CommitDetailView />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Loading commit detail...")).toBeInTheDocument();
  });

  it("renders error message when error", () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    useSelector.mockImplementation((callback) =>
      callback({
        commitDetail: {
          data: null,
          loading: false,
          error: "Error",
        },
      })
    );

    const params = { owner: "owner", repo: "repo", commitId: "commitId" };

    render(
      <MemoryRouter
        initialEntries={[`/${params.owner}/${params.repo}/${params.commitId}`]}
      >
        <Routes>
          <Route
            path="/:owner/:repo/:commitId"
            element={<CommitDetailView />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Page Not Found")).toBeInTheDocument();
  });

  it("renders commit detail", () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    useSelector.mockImplementation((callback) =>
      callback({
        commitDetail: {
          data: {
            sha: "sha",
            commit: {
              message: "message",
              author: {
                date: new Date().toISOString(),
              },
            },
            stats: {
              additions: 1,
              deletions: 1,
              total: 1,
            },
            files: [
              {
                filename: "filename",
                additions: 1,
                deletions: 1,
                changes: 1,
              },
            ],
            author: {
              login: "name",
              avatar_url: "__avatar_url__",
              date: "date",
            },
          },
          loading: false,
          error: null,
        },
      })
    );

    const params = { owner: "owner", repo: "repo", commitId: "commitId" };

    render(
      <MemoryRouter
        initialEntries={[`/${params.owner}/${params.repo}/${params.commitId}`]}
      >
        <Routes>
          <Route
            path="/:owner/:repo/:commitId"
            element={<CommitDetailView />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Commit")).toBeInTheDocument();
    expect(
      screen.getByText("committed less than a minute ago")
    ).toBeInTheDocument();
    expect(screen.getByText("message")).toBeInTheDocument();
    expect(screen.getByText("name")).toBeInTheDocument();
    expect(screen.getByText("Back to commits")).toBeInTheDocument();
  });
});
