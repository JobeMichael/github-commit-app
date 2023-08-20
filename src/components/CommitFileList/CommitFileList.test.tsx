import { render, screen } from "CustomRender";
import CommitFileList from "./CommitFileList";

describe("CommitFileList", () => {
  const mockFiles = [
    { filename: "file1.txt", status: "modified", additions: 2, deletions: 1 },
    { filename: "file2.txt", status: "added", additions: 5, deletions: 0 },
    { filename: "file3.txt", status: "deleted", additions: 0, deletions: 3 },
  ];

  it("renders correctly", () => {
    // @ts-ignore
    render(<CommitFileList files={mockFiles} />);

    expect(screen.getByText("file1.txt")).toBeInTheDocument();
    expect(screen.getByText("status : modified")).toBeInTheDocument();
    expect(screen.getByText("file2.txt")).toBeInTheDocument();
    expect(screen.getByText("status : added")).toBeInTheDocument();
    expect(screen.getByText("file3.txt")).toBeInTheDocument();
    expect(screen.getByText("status : deleted")).toBeInTheDocument();
  });
});
