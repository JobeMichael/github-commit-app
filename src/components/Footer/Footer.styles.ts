import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 25px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.textWhite};
  justify-content: center;
  font-weight: 600;
  font-size: 0.8rem;
`;
