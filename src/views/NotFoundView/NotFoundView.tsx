import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NotFoundText = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  a {
    color: #000;
  }
`;

const NotFoundView: React.FC = () => {
  return (
    <NotFoundContainer>
      <NotFoundText>Page Not Found</NotFoundText>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <h4>or</h4>
      <p>Maybe you forgot to add the valid repo name and owner in the URL</p>
      <p> Below are the sample URLs to try out</p>
      <LinkWrapper>
        <Link to="/facebook/react">/facebook/react</Link>

        <Link to="/angular/angular">/angular/angular</Link>
      </LinkWrapper>
    </NotFoundContainer>
  );
};

export default NotFoundView;
