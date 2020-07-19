import React from 'react';
import {Text, Button} from 'react-native';
import {Container} from './Profile.styles';

const Profile = ({navigation}) => {
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
