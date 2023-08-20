import styled from "styled-components";

export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  color: #586069;
  margin-right: 1rem;

  span {
    display: flex;
    align-items: center;
  }
  b {
    margin-right: 2px;
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
