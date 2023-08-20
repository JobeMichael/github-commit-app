import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled(Link)`
  padding: 0;
  display: flex;
  border: 1px solid #e1e4e8;
  background-color: #fff;
  flex-direction: column;
  padding: 1rem;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #f6f8fa;
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
  margin-top: 1rem;
`;

export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: #586069;
  margin-right: 1rem;

  span {
    display: flex;
    align-items: center;
  }
`;

export const AvatarWrapper = styled.div`
  margin-right: 0.5rem;
  border-radius: 50%;
  background-color: rgba(207, 211, 214, 0.5);
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid rgba(207, 211, 214, 0.5);

  img {
    border-radius: 50%;
    max-width: 100%;
    height: auto;
  }
`;
