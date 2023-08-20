import CommitAuthor from "components/CommitAuthor/CommitAuthor";
import CommitFileList from "components/CommitFileList/CommitFileList";
import CommitSummary from "components/CommitSummary/CommitSummary";
import { ICommit } from "interfaces";
import * as S from "./CommitDetail.styles";

interface IProps {
  data: ICommit;
}

const CommitDetail: React.FC<IProps> = ({ data }) => {
  const {
    commit: {
      message,
      author: { date },
    },
    author: { login, avatar_url },
    stats: { total, additions, deletions },
    files,
  } = data;

  const lines = message.split("\n");
  const title = lines[0];
  const description = lines.slice(2).join("\n").trim();

  const numChangedFiles = files.length;

  return (
    <>
      <S.MessageDetail>
        <S.Message>
          <h4>{title}</h4>
          <p>{description}</p>
        </S.Message>
        <S.CommitAuthorWrapper>
          <CommitAuthor login={login} avatarUrl={avatar_url} date={date} />
        </S.CommitAuthorWrapper>
      </S.MessageDetail>
      <CommitSummary
        total={total}
        numChangedFiles={numChangedFiles}
        additions={additions}
        deletions={deletions}
      />
      <CommitFileList files={files} />
    </>
  );
};

export default CommitDetail;
