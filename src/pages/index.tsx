/** @format */

import { DisplayCode } from '../components';
import schemaContainer from '../libs/schemaContainer';
import { validator } from '../data/validator';

const MainPage = () => {
	return (
		<main>
			<DisplayCode code={schemaContainer(validator, 'yup')} />
		</main>
	);
};

export default MainPage;
