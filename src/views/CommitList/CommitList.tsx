import { ThunkDispatch } from "@reduxjs/toolkit";
import CommitListItem from "components/CommitListItem/CommitListItem";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "store";
import { fetchCommits } from "store/commitsSlice";

const CommitList = () => {
  console.count("CommitList");
  const { owner = "", repo = "" } = useParams<{
    owner: string;
    repo: string;
  }>();

  const dispatch = useDispatch<ThunkDispatch<{}, undefined, any>>();

  const { commits, loading, error } = useSelector(
    (state: RootState) => state.commits
  );

  useEffect(() => {
    console.count("CommitList useEffect");
    if (!owner || !repo) {
      return;
    }
    dispatch(fetchCommits({ owner, repo }));
  }, [dispatch, owner, repo]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!commits) {
    return <div>No commits</div>;
  }

  return (
    <>
      <h1>Commits Overview</h1>

      {commits.map((commit: any) => (
        <CommitListItem
          commit={commit}
          key={commit.sha}
          repoName={repo}
          repoOwner={owner}
        />
      ))}
    </>
  );
};

export default React.memo(CommitList);
