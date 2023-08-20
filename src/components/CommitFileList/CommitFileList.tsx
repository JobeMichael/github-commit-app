import { IFile } from "interfaces";
import React from "react";
import styled from "styled-components";

const FileListContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
`;

const FileItem = styled.div`
  margin-bottom: 10px;
  padding: 10px 15px;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const FileName = styled.span`
  color: #565454;
  margin: 0;
  font-weight: 500;
  word-break: break-all;
`;

const FileStatus = styled.p`
  margin: 5px 0;
`;

const FileChanges = styled.p`
  margin: 0;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Addition = styled.span`
  color: green;
  font-weight: bold;
`;

const Deletion = styled.span`
  color: red;
  font-weight: bold;
`;

interface IProps {
  files: Array<IFile>;
}

const CommitFileList: React.FC<IProps> = ({ files }) => {
  return (
    <FileListContainer>
      {files.map((file, index) => (
        <FileItem key={index}>
          <FileName>{file.filename}</FileName>
          <FileChanges>
            <FileStatus> status : {file.status}</FileStatus>
            <div>
              Additions: <Addition>{file.additions}</Addition> | Deletions:{" "}
              <Deletion>{file.deletions}</Deletion>
            </div>
          </FileChanges>
        </FileItem>
      ))}
    </FileListContainer>
  );
};

export default CommitFileList;
