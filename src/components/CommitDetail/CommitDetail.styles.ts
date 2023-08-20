import styled from "styled-components";

export const Wrapper = styled.div``;

export const MessageDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  background-color: #f8f8f8;
  border-radius: 6px;
  border: 1px solid #e1e4e8;
`;

export const CommitAuthorWrapper = styled.div`
  padding: 8px 15px;
  border-top: 1px solid #e1e4e8;
`;

export const Message = styled.div`
  padding: 8px 15px;

  p {
    line-height: 1.5;
    margin: 0;
    padding-bottom: 1rem;
  }
`;
