/** @format */
import * as Prism from 'prismjs';
import React from 'react';
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
		<pre>
			<code className="language-javascript">{code}</code>
		</pre>
	);
};

export default DisplayCode;
