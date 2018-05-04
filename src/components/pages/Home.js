import React from 'react';
import styled, { keyframes } from 'styled-components';

import logo from '../../assets/logo.svg';

const Title = styled.div`
  font-size: 1.5em;
`;

const Wrapper = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const AppIntro = styled.p`
  font-size: large;
`;

const AppLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const AppLogo = styled.img`
  animation: ${AppLogoSpin} infinite 20s linear;
  height: 80px;
`;

function Home() {
  return (
    <Wrapper>
      <AppHeader>
        <AppLogo src={logo} className="App-logo" alt="logo" />
        <Title>Welcome to React</Title>
      </AppHeader>
      <AppIntro>
        To get started, edit <code>src/App.js</code> and save to reload.
      </AppIntro>
    </Wrapper>
  );
}

export {
  Home,
};
