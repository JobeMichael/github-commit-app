import CommitAuthor from "components/CommitAuthor/CommitAuthor";
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

  const changeSummary = `Showing ${total} changed file${
    numChangedFiles > 1 ? "s" : ""
  } with ${additions} addition${
    additions > 1 ? "s" : ""
  } and ${deletions} deletion${deletions > 1 ? "s" : ""}.`;

  return (
    <S.Wrapper>
      {" "}
      <h2>Commit Detail</h2>
      <S.MessageDetail>
        <S.Message>
          <h4>{title}</h4>
          <p>{description}</p>
        </S.Message>
        <S.CommitAuthorWrapper>
          <CommitAuthor login={login} avatarUrl={avatar_url} date={date} />
        </S.CommitAuthorWrapper>
      </S.MessageDetail>
      <p>{changeSummary}</p>
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
    </S.Wrapper>
  );
};

export default CommitDetail;
