import React, {FunctionComponent} from 'react';
import {Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {Container, Text} from './Feed.styles';

const Feed: FunctionComponent<StackScreenProps<any, any>> = ({navigation}) => {
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
