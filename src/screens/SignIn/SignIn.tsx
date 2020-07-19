import React from 'react';
import {Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {authFetched} from '../../store/auth/slice';
import {Container} from './SignIn.styles';

const SignIn = () => {
  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(authFetched());
  };

  return (
    <Container>
      <Button onPress={handleSignIn} title="Sign in" />
    </Container>
  );
};

export default SignIn;
