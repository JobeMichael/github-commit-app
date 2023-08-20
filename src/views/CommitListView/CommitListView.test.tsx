//@ts-nocheck
import { render, screen } from "CustomRender";
import { useDispatch, useSelector } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import CommitListView from "./CommitListView";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("CommitListView", () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) =>
      callback({
        commits: {
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
        commits: {
          data: null,
          loading: true,
          error: null,
        },
      })
    );

    const params = { owner: "owner", repo: "repo" };

    render(
      <MemoryRouter initialEntries={[`/${params.owner}/${params.repo}`]}>
        <Routes>
          <Route path="/:owner/:repo" element={<CommitListView />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Loading commits...")).toBeInTheDocument();
  });

  it("renders error message when error", () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    useSelector.mockImplementation((callback) =>
      callback({
        commits: {
          data: null,
          loading: false,
          error: "Error",
        },
      })
    );

    const params = { owner: "owner", repo: "repo" };

    render(
      <MemoryRouter initialEntries={[`/${params.owner}/${params.repo}`]}>
        <Routes>
          <Route path="/:owner/:repo" element={<CommitListView />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Page Not Found")).toBeInTheDocument();
  });

  it.only("renders commit detail", () => {
    // Mock useDispatch
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    useSelector.mockImplementation((callback) =>
      callback({
        commits: {
          data: [
            {
              author: {
                login: "login_name",
                avatar_url: "__avatar_url__",
              },
              sha: "sha",
              commit: {
                committer: {
                  date: new Date().toISOString(),
                },
                message: "message",
              },
            },
          ],
          loading: false,
          error: null,
        },
      })
    );

    const params = { owner: "owner", repo: "repo" };

    render(
      <MemoryRouter initialEntries={[`/${params.owner}/${params.repo}`]}>
        <Routes>
          <Route path="/:owner/:repo" element={<CommitListView />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("login_name")).toBeInTheDocument();
    expect(
      screen.getByText("committed less than a minute ago")
    ).toBeInTheDocument();
    expect(screen.getByText("message")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "__avatar_url__",
      "avatar_url"
    );
  });
});
