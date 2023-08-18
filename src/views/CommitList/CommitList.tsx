import { ThunkDispatch } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchCommits } from "store/commitsSlice";

const CommitList = () => {
  console.count("CommitList");
  const { owner, repo } = useParams<{
    owner: string;
    repo: string;
  }>();

  const dispatch = useDispatch<ThunkDispatch<{}, undefined, any>>();

  const { commits, loading, error } = useSelector(
    (state: any) => state.commits
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
      <ul>
        {commits.map((commit: any) => (
          <li key={commit.sha}>
            <Link to={`/${owner}/${repo}/${commit.sha}`}>
              {commit.commit.message} by {commit.commit.author.name} on{" "}
              {commit.commit.author.date}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default React.memo(CommitList);
