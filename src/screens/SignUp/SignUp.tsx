import React from 'react';
import {Platform} from 'react-native';
import Form from './components/Form';
import {Container, KeyboardAvoidingView} from './SignUp.styles';

const SignUp = () => {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Form />
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignUp;
