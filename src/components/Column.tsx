import React from 'react';
import { ColumnContainer, ColumnTitle } from '../app/styles';

type ColumnProps = {
  text: string
}

export const Column = ({ 
  text,
  children
}: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>
        {text}
      </ColumnTitle>
      {children}
    </ColumnContainer>
  );
}
