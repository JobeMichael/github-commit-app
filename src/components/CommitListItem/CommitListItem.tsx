import { ICommit } from "interfaces";
import React from "react";
import * as S from "./CommitListItem.styles";


interface IProps {
  commit: ICommit;
  repoName: string;
  repoOwner: string;
}

const IssueItem: React.FC<IProps> = ({ commit, repoName, repoOwner }) => {
  const {
    author: { login, avatar_url },
    commit: {
      message,
      committer: { date },
    },
  } = commit;



  const titleRegex = /^.*$/m;

  const match = message.match(titleRegex);
  const title = match ? match[0] : "No title found";

  const url = `/${repoOwner}/${repoName}/${commit.sha}`;

  return (
    <S.Wrapper to={url}>
      <S.Title>{title}</S.Title>
      <S.Footer>

      </S.Footer>
    </S.Wrapper>
  );
};

export default IssueItem;
