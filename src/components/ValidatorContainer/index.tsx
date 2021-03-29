import { Grid, GridItem, Text } from '@chakra-ui/react';
import { SchemaValue } from '..';

export const ValidatorContainer = () => {
  return (
    <section>
      <Text fontSize="lg" my='2'>Schema value name</Text>
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
      </Grid>
    </section>
  );
};

export default ValidatorContainer;