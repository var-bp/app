import React, {FunctionComponent} from 'react';
import {Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {Container} from './Favorites.styles';

const Favorites: FunctionComponent<StackScreenProps<any, any>> = ({
  navigation,
}) => {
  return (
    <Container>
      <Text>Favorites</Text>
      <Button
        onPress={() => navigation.navigate('Details')}
        title="Go to Details"
      />
    </Container>
  );
};

export default Favorites;
