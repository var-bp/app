import React from 'react';
import {Text, Button} from 'react-native';
import {Container} from './Favorites.styles';

const Favorites = ({navigation}) => {
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
