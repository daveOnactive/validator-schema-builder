import React from 'react';

export interface WrapperProps {
  children: React.ReactNode,
  [props: string]: any
}