import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 50%;
  height: 45px;
  border: 1px solid #eee;
  border-radius: 25px;
  font-size: 15px;
  box-shadow: 0px 1px 3px 0px #d3d3d3;
  margin: 10px;
  cursor: pointer;

  :hover {
    box-shadow: 0px 1px 10px 0px #d3d3d3;
  }
`;

const ComposeButton = () => <Button>Compose</Button>;

export default ComposeButton;
