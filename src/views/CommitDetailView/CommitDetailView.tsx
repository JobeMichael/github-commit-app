import { ThunkDispatch } from "@reduxjs/toolkit";
import Button from "components/Button/Button";
import CommitDetail from "components/CommitDetail/CommitDetail";
import PageLoader from "components/PageLoader/PageLoader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "store";
import { fetchCommitDetail } from "store/commitDetailSlice";
import NotFoundView from "../NotFoundView/NotFoundView";
import * as S from "./CommitDetailView.styles";

const CommitDetailView = () => {
  const { owner, repo, commitId } = useParams();

  const dispatch = useDispatch<ThunkDispatch<RootState, undefined, any>>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.commitDetail
  );
  console.log(
    "🚀 ~ file: CommitDetailView.tsx:18 ~ CommitDetailView ~ data:",
    data
  );

  useEffect(() => {
    if (!owner || !repo || !commitId) {
      return;
    }
    dispatch(fetchCommitDetail({ owner, repo, commitId }));
  }, [dispatch, owner, repo, commitId]);

  if (loading) {
    return <PageLoader message="Loading commit detail..." />;
  }

  if (error) {
    return <NotFoundView />;
  }

  if (!data) {
    return <div>No commits</div>;
  }

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
