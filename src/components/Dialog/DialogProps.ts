import React from 'react';

export default interface DialogProps {
  children: React.ReactNode,
  isOpen: boolean,
  onClose: (params?: any) => void,
  footer?: React.ReactNode,
  title: string,
  [otherProps: string]: unknown,
}