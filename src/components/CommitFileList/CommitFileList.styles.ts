import styled from "styled-components";

export const FileListContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: 20px;
  border-radius: 5px;
`;

export const FileItem = styled.div`
  margin-bottom: 10px;
  padding: 10px 15px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 5px;
`;

export const FileName = styled.span`
  color: ${(props) => props.theme.colors.textGrey};
  margin: 0;
  font-weight: 500;
  word-break: break-all;
`;

export const FileStatus = styled.p`
  margin: 5px 0;
`;

export const FileChanges = styled.p`
  margin: 0;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Addition = styled.span`
  color: ${(props) => props.theme.colors.success};
  font-weight: bold;
`;

export const Deletion = styled.span`
  color: ${(props) => props.theme.colors.error};
  font-weight: bold;
`;
