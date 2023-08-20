import { ThunkDispatch } from "@reduxjs/toolkit";
import PageLoader from "components/PageLoader/PageLoader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "store";
import { fetchCommitDetail } from "store/commitDetailSlice";

interface ICommitDetail {
  commit: {
    author: { name: string; date: string };
    message: string;
  };
  stats: { total: number; additions: number; deletions: number };
  files: Array<{
    filename: string;
    status: string;
    additions: number;
    deletions: number;
  }>;
}

const CommitDetail = () => {
  console.count("CommitList");
  const { owner, repo, commitId } = useParams();

  const dispatch = useDispatch<ThunkDispatch<RootState, undefined, any>>();

  const { data, loading, error } = useSelector(
    (state: RootState) => state.commitDetail
  );

  useEffect(() => {
    console.count("CommitList useEffect");
    if (!owner || !repo || !commitId) {
      return;
    }
    dispatch(fetchCommitDetail({ owner, repo, commitId }));
  }, [dispatch, owner, repo, commitId]);

  if (loading) {
    return <PageLoader message="Loading commit detail..." />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>No commits</div>;
  }

  console.log(data.commit.author.date);

  return (
    <>
      <h2>Commit Detail</h2>
      <p>Commit Message: {data.commit.message}</p>
      <p>Author: {data.commit.author.name}</p>
      {/* <p>Commit Date: {data.commit.author.date.toDateString()}</p> */}
      <p>Total Additions: {data.stats.additions}</p>
      <p>Total Deletions: {data.stats.deletions}</p>
      <p>Total Files Changed: {data.stats.total}</p>
      <h3>Changed Files:</h3>
      <ul>
        {data.files.map((file, index) => (
          <li key={index}>
            <p>Filename: {file.filename}</p>
            <p>Status: {file.status}</p>
            <p>Additions: {file.additions}</p>
            <p>Deletions: {file.deletions}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CommitDetail;
