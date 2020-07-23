import React, {FunctionComponent} from 'react';
import {Text, Button} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {Container} from './Profile.styles';

const Profile: FunctionComponent<StackScreenProps<any, any>> = ({
  navigation,
}) => {
  return (
    <Container>
      <Text>Profile</Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to Notifications"
      />
      <Button
        onPress={() => navigation.navigate('ResetPassword')}
        title="Go to ResetPassword"
      />
    </Container>
  );
};

export default Profile;
