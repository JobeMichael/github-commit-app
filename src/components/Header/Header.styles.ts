import styled from "styled-components";

export const Header = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  font-size: 0.8rem;

  h1 {
    color: ${(props) => props.theme.colors.textWhite};
  }
`;
