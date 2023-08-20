import styled from "styled-components";

export const MessageDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.border};
`;

export const CommitAuthorWrapper = styled.div`
  padding: 8px 15px;
  border-top: 1px solid ${(props) => props.theme.colors.border};
`;

export const Message = styled.div`
  padding: 8px 15px;

  p {
    line-height: 1.5;
    margin: 0;
    padding-bottom: 1rem;
  }
`;
