// PlaceholderPage.js
import React from 'react';
import styled from 'styled-components';

const PlaceholderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  color: #fff;
  font-size: 24px;
`;

const PlaceholderPage = () => {
  return (
    <PlaceholderWrapper>
      <p>Your content is loading...</p>
    </PlaceholderWrapper>
  );
};

export default PlaceholderPage;
