import styled from "styled-components";
import { ButtonProps } from "./Button";

export const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${({ primary, theme: { colors } }) =>
    primary ? colors.primary : colors.secondary};
  color: ${({ primary, theme: { colors } }) =>
    primary ? colors.textWhite : colors.text};
`;
