/** @format */

import { DisplayCode, ValidatorMethod } from '../components';
import schemaContainer from '../libs/schemaContainer';
import { validator } from '../data/validator';

const MainPage = () => {
	return (
		<main>
			<DisplayCode code={schemaContainer(validator, 'yup')} />
			{['string', 'number', 'email'].map((method, i) => (
				<ValidatorMethod method={method} key={i} />
			))}
		</main>
	);
};

export default MainPage;
