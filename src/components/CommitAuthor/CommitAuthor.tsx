import * as S from "./CommitAuthor.styles";
const { formatDistanceToNow, parseISO } = require("date-fns");

interface IProps {
  login: string;
  avatarUrl: string;
  date: Date;
}

const CommitAuthor: React.FC<IProps> = ({ login, avatarUrl, date }) => {
  const parsedDate = parseISO(date);
  const formattedDate = formatDistanceToNow(parsedDate, { addSuffix: true });
  return (
    <S.FooterItem>
      <S.AvatarWrapper>
        <img src={avatarUrl} alt={login} />
      </S.AvatarWrapper>
      <span>
        <b>{login}</b> {`committed ${formattedDate}`}
      </span>
    </S.FooterItem>
  );
};

export default CommitAuthor;
