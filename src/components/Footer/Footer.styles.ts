import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors.primary};
  top: 0;
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.textWhite};
  font-weight: 600;
`;
