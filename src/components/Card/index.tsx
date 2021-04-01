/** @format */

import React from 'react';
import { Box } from "@chakra-ui/react";
import CardProps from './CardProps';


export const Card = ({ children, ...props }: CardProps) => {
	return <Box
		w='100%'
		borderWidth="1px"
		borderRadius="lg"
		overflow="hidden"
		boxShadow="xl"
		rounded="md"
		{...props}
	>{children}</Box>;
};

export default Card;
