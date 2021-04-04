/** @format */

import { useDrag } from 'react-dnd';
import { SchemaValidators } from '../../types';
import { CardWithBtn } from '../../components';

interface ValidatorMethodProps {
	method: SchemaValidators;
}

export const ValidatorMethod = ({ method }: ValidatorMethodProps) => {
	const [{ isDragging }, drag] = useDrag({
		type: `validatorMethod`,
		item: {
			type: method,
			message: null,
			value: null
		},
		collect: (monitor: any) => ({
			isDragging: !!monitor.isDragging()
		})
	});

	return (
		<section
			ref={drag}
			style={{
				cursor: isDragging ? 'pointer' : 'copy'
			}}
		>
			<CardWithBtn
				title={method}
				onClose={() => null}
			/>
		</section>
	);
};

export default ValidatorMethod;
