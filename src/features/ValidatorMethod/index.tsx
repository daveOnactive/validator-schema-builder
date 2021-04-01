/** @format */

import { useDrag } from 'react-dnd';
import { SchemaValidators } from '../../types';
import { CardWithBtn } from '../../components';

interface ValidatorMethodProps {
	method: string;
}

export const ValidatorMethod = ({ method }: ValidatorMethodProps) => {
	const [{ isDragging }, drag] = useDrag({
		type: 'validatorMethod',
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
		// style={{
		// 	width: '100px',
		// 	height: '100px',
		// 	color: '#fff',
		// 	background: 'red',
		// 	textAlign: 'center'
		// }}
		>
			<CardWithBtn />
		</section>
	);
};

export default ValidatorMethod;
