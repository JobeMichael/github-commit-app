import { ThunkDispatch } from "@reduxjs/toolkit";
import Button from "components/Button/Button";
import CommitDetail from "components/CommitDetail/CommitDetail";
import PageLoader from "components/PageLoader/PageLoader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "store";
import { fetchCommitDetail } from "store/commitDetailSlice";
import * as S from "./CommitDetailView.styles";

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

const CommitDetailView = () => {
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
      <S.WrapperHeader>
        <h2>Commit</h2>
        <Link to={`/${owner}/${repo}`}>
          <Button primary>Back to commits</Button>
        </Link>
      </S.WrapperHeader>
      <CommitDetail data={data} />
    </>
  );
};

export default CommitDetailView;
