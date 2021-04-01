/** @format */
import * as Prism from 'prismjs';
import React from 'react';
import { Box } from "@chakra-ui/react";
import 'prismjs/themes/prism-tomorrow.css';

interface Props {
	code: string;
}

const { useEffect } = React;

const style = {
	height: '100%',
	margin: '0px',
	width: '100%',
}

export const DisplayCode = ({ code }: Props) => {
	useEffect(() => {
		Prism.highlightAll();
	}, []);
	return (
		// <Box w='100%' h='100'>
		<pre style={style}>
			<code className="language-javascript">{code}</code>
		</pre>
		// </Box>
	);
};

export default DisplayCode;
