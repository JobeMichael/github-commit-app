import { render, screen } from "CustomRender";
import CommitDetail from "./CommitDetail";

describe("CommitDetail", () => {
  const mockData = {
    commit: {
      message: "Test commit message\n\nTest commit description",
      author: { date: "2022-01-01T00:00:00Z" },
    },
    author: { login: "testuser", avatar_url: "https://example.com/avatar.png" },
    stats: { total: 10, additions: 5, deletions: 5 },
    files: [{ filename: "testfile.txt", additions: 2, deletions: 1 }],
  };

  it("renders correctly", () => {
    render(
      // @ts-ignore
      <CommitDetail data={mockData} />
    );
    expect(screen.getByText("Test commit message")).toBeInTheDocument();
    expect(screen.getByText("Test commit description")).toBeInTheDocument();
    expect(screen.getByAltText("testuser")).toBeInTheDocument();
    expect(screen.getByText("committed over 1 year ago")).toBeInTheDocument();
    expect(screen.getByText("testfile.txt")).toBeInTheDocument();
  });
});
