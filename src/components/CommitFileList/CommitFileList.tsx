import { IFile } from "interfaces";
import React from "react";
import * as S from "./CommitFileList.styles";

interface IProps {
  files: Array<IFile>;
}

const CommitFileList: React.FC<IProps> = ({ files }) => {
  return (
    <S.FileListContainer>
      {files.map((file, index) => (
        <S.FileItem key={index}>
          <S.FileName>{file.filename}</S.FileName>
          <S.FileChanges>
            <S.FileStatus> status : {file.status}</S.FileStatus>
            <div>
              Additions: <S.Addition>{file.additions}</S.Addition> | Deletions:{" "}
              <S.Deletion>{file.deletions}</S.Deletion>
            </div>
          </S.FileChanges>
        </S.FileItem>
      ))}
    </S.FileListContainer>
  );
};

export default CommitFileList;
