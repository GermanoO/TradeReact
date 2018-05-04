import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MainMenu from '../MainMenu';

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #fef;
`;

const Content = styled.div`
  width: 80%;
  height: 100%;
  float: left;
`;

const propTypes = {
  children: PropTypes.element.isRequired,
};

function GlobalLayout({ children }) {
  return (
    <Container>
      <MainMenu />
      <Content>
        {children}
      </Content>
    </Container>
  );
}

GlobalLayout.propTypes = propTypes;

export {
  GlobalLayout,
};
