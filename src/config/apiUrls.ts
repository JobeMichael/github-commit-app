const GITHUB_API_URL = "https://api.github.com";

export const getCommitsUrl = (owner: string, repo: string) =>
  `${GITHUB_API_URL}/repos/${owner}/${repo}/commits`;

export const getCommitDetailsUrl = (owner: string, repo: string, sha: string) =>
  `${GITHUB_API_URL}/repos/${owner}/${repo}/commits/${sha}`;
