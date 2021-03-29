/** @format */
import * as Prism from 'prismjs';
import React from 'react';
import { Box } from "@chakra-ui/react";
import 'prismjs/themes/prism-tomorrow.css';

interface Props {
	code: string;
}

const { useEffect } = React;

export const DisplayCode = ({ code }: Props) => {
	useEffect(() => {
		Prism.highlightAll();
	}, []);
	return (
		<Box w='550px'>
			<pre>
				<code className="language-javascript">{code}</code>
			</pre>
		</Box>
	);
};

export default DisplayCode;
