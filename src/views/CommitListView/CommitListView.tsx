import { ThunkDispatch } from "@reduxjs/toolkit";
import CommitListItem from "components/CommitListItem/CommitListItem";
import PageLoader from "components/PageLoader/PageLoader";
import { ICommit } from "interfaces";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "store";
import { fetchCommits } from "store/commitsSlice";
import NotFoundView from "views/NotFoundView/NotFoundView";
import * as S from "./CommitListView.styles";

const CommitList = () => {
  const { owner = "", repo = "" } = useParams<{
    owner: string;
    repo: string;
  }>();

  const dispatch = useDispatch<ThunkDispatch<{}, undefined, any>>();

  const { data, loading, error } = useSelector(
    (state: RootState) => state.commits
  );

  useEffect(() => {
    if (!owner || !repo) {
      return;
    }
    dispatch(fetchCommits({ owner, repo }));
  }, [dispatch, owner, repo]);

  if (loading) {
    return <PageLoader message=" Loading commits..." />;
  }

  if (error) {
    return <NotFoundView />;
  }

  if (!data) {
    return <div>No commits</div>;
  }

  return (
    <>
      <S.Title>
        Commits for{" "}
        <b>
          {owner}/{repo}
        </b>
      </S.Title>
      <S.Wrapper>
        {data.map((commit: ICommit) => (
          <CommitListItem
            commit={commit}
            key={commit.sha}
            repoName={repo}
            repoOwner={owner}
          />
        ))}
      </S.Wrapper>
    </>
  );
};

export default CommitList;
