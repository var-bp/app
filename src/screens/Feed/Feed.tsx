import React from 'react';
import {Button, NativeModules} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {Container, Text} from './Feed.styles';

const Feed = ({navigation}: StackScreenProps<any, any>) => {
  console.log('NativeModules:', NativeModules.ToastExample);
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
