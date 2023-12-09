import React from 'react';
import { CardContainer } from '../app/styles';

type CardProps = {
  text: string
};

export const Card = ({ text }: CardProps) => {
  return (
    <CardContainer>
      {text}
    </CardContainer>
  )
};
