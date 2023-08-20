import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 6px;
  margin-bottom: 16px;
`;

export const Title = styled.p`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.text};
  padding: 1rem 0 2rem;
  margin: 0;
`;
