import React from "react";
import * as S from "./CommitSummary.styles";

interface CommitSummaryProps {
  total: number;
  numChangedFiles: number;
  additions: number;
  deletions: number;
}

const CommitSummary: React.FC<CommitSummaryProps> = ({
  total,
  numChangedFiles,
  additions,
  deletions,
}) => {
  return (
    <S.Wrapper>
      <strong>
        {numChangedFiles} changed file{numChangedFiles > 1 ? "s" : ""}
      </strong>
      {` with `}
      <strong>
        {additions} addition{additions > 1 ? "s" : ""}
      </strong>
      {` and `}
      <strong>
        {deletions} deletion{deletions > 1 ? "s" : ""}
      </strong>
      {`.`}
    </S.Wrapper>
  );
};

export default CommitSummary;
