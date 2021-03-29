/** @format */

import { DisplayCode, ValidatorMethod, Card, SchemaValue, ValidatorContainer } from '../components';
import schemaContainer from '../libs/schemaContainer';
import { validator } from '../data/validator';
import { Grid, GridItem, Divider } from "@chakra-ui/react";

const MainPage = () => {
	return (
		<main>
			<Grid
				h="100%"
				templateColumns="repeat(3, 1fr)"
				// templateColumns="repeat(5, 1fr)"
				gap={4}
				w='100%'
				p='4'
			>
				<GridItem bg="gray.50">
					<Card>
						<Grid
							templateColumns="repeat(3, 1fr)"
							// templateColumns="repeat(5, 1fr)"
							gap={4}
							w='100%'
						// p='4'
						>
							{['string', 'number', 'email'].map((method, i) => (
								<GridItem>
									<SchemaValue />
								</GridItem>
							))}
							<Divider />
						</Grid>
						<ValidatorContainer />
					</Card>
				</GridItem>
				<GridItem bg="gray.50">
					<Card>
						<Grid
							templateColumns="repeat(3, 1fr)"
							// templateColumns="repeat(5, 1fr)"
							gap={4}
							w='100%'
						// p='4'
						>
							{['string', 'number', 'email'].map((method, i) => (
								<GridItem>
									<ValidatorMethod method={method} key={i} />
								</GridItem>
							))}
						</Grid>
					</Card>
				</GridItem>
				<GridItem bg="gray.50">
					<Card>
						<DisplayCode code={schemaContainer(validator, 'yup')} />
					</Card>
				</GridItem>
			</Grid>
		</main>
	);
};

export default MainPage;
