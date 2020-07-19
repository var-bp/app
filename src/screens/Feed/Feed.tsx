import React from 'react';
import {Text, Button} from 'react-native';
import {Container} from './Feed.styles';

const Feed = ({navigation}) => {
  return (
    <Container>
      <Text>Feed</Text>
      <Button
        onPress={() => navigation.navigate('Details')}
        title="Go to Details"
      />
    </Container>
  );
};

export default Feed;
