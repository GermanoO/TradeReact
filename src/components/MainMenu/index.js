import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { routeConstants } from '../../constants';

const Wrapper = styled.div`
  width: 20%;
  height: 100%;
  float: left;
  background-color: #eae
`;

const Ul = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style: none;
`;

const Li = styled.li`
  width: 100%;
  padding-top: 50%;
  text-align: center;
`;

function MainMenu() {
  return (
    <Wrapper>
      <Ul>
        <Li><Link to={routeConstants.PAGE_HOME}>Home</Link></Li>
        <Li><Link to={routeConstants.PAGE_LOGIN}>Login</Link></Li>
      </Ul>
    </Wrapper>
  );
}

export default MainMenu;
