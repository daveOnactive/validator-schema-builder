/** @format */

import React from 'react';

interface CardProps {
	children: React.ReactNode;
}
export const Card = ({ children }: CardProps) => {
	return <section>{children}</section>;
};

export default Card;
