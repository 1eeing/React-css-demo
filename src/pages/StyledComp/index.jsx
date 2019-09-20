import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: #fff;
  padding: 10px 20px;
  background-color: red;
`;

const StyledDemo = () => (
  <Button>Click it, This is render by styled-components</Button>
);

export default StyledDemo;
