import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled(Link)`
  padding: 0;
  display: flex;
  border-bottom: 1px solid #e1e4e8;
  background-color: #fff;
  flex-direction: column;
  padding: 1rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #f6f8fa;
  }

  &:last-child {
    border-bottom: none;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  &:first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #000;
  font-size: 1rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

