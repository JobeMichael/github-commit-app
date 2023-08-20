import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "store";
import { fetchCommitDetail } from "store/commitDetailSlice";

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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>No commits</div>;
  }

  return <div>CommitDetail</div>;
};

export default CommitDetail;
