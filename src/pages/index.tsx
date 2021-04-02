/** @format */

import { Card, Wrapper, CardWithBtn, TextField } from '../components';
import { validator } from '../data/validator';
import { Box, Flex, VStack, Button, Text } from "@chakra-ui/react";
import { DisplayCode, SchemaBuilder, SchemaValues } from '../features';

const MainPage = () => {
	return (
		<Box
			minH='100vh'
			w='100%'
			p='2'
		>
			<Flex minH='90vh'>
				<Wrapper
					w='80%'
					mx='2'
					p='3'
				>
					<VStack spacing={4}
						h='100%'
					>
						<Card
							h='30%'
						>
							<SchemaValues />
						</Card>
						<TextField />
						<Card
							// mt='3'
							h='100%'
						>
							<SchemaBuilder />
						</Card>
					</VStack>

				</Wrapper>
				<Wrapper
					w='50%'
					mx='2'
				>
					<Text textAlign='center' fontSize='xl' p='3'>Validation Methods</Text>
					{
						[1, 2, 3, 5, 6, 7].map((item: number) => (
							<CardWithBtn />
						))
					}
				</Wrapper>
				<Wrapper
					w='50%'
					mx='2'
					p='3'
				>
					<DisplayCode />
				</Wrapper>
			</Flex>
		</Box>
	);
};

export default MainPage;
