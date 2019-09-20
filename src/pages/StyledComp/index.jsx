import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: #fff;
  padding: 10px 20px;
  background-color: red;
`;

const Button2 = styled.button`
  color: #fff;
  padding: 10px 20px;
  background-color: red;
`;

const StyledDemo = () => (
  <div>
    <Button>Click it, This is render by styled-components</Button>
    <Button2>Click it, This is Button2</Button2>
  </div>
);

export default StyledDemo;
