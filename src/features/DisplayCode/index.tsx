/** @format */
import * as Prism from 'prismjs';
import React from 'react';
import { AppContext } from '../../Providers';
import { AppState } from '../../interfaces';
import schemaContainer from '../../libs/schemaContainer';

import 'prismjs/themes/prism-tomorrow.css';

interface Props {
	code: string;
}

const { useEffect, useContext } = React;

const style = {
	height: '100%',
	margin: '0px',
	width: '100%',
}

export const DisplayCode = () => {

	const { state: {
		schemaValues,
	} } = useContext<any>(AppContext);

	useEffect(() => {
		Prism.highlightAll();
	}, []);
	return (
		// <Box w='100%' h='100'>
		<pre style={style}>
			<code className="language-javascript">{schemaContainer(schemaValues, 'yup')}</code>
		</pre>
		// </Box>
	);
};

export default DisplayCode;
