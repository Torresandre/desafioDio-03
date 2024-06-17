import React from 'react'

import { ButtonContainer } from './style';

export const Button = ({title,variant = "primary", onClick}) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>{title}</ButtonContainer>
  )
}

