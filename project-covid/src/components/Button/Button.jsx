import React from 'react';
import { StyledButton } from './Button.styled';

function Button(props) {
  const { title } = props;

  return <StyledButton>{title}</StyledButton>;
}

export default Button;
