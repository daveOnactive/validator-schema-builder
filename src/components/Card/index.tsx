/** @format */

import React from 'react';
import { Box } from "@chakra-ui/react";
import CardProps from './CardProps';


export const Card = ({ children }: CardProps) => {
	return <Box w='100%' h='100%' borderWidth="1px" borderRadius="lg" overflow="hidden">{children}</Box>;
};

export default Card;
