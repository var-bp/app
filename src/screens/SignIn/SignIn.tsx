import React from 'react';
import {Platform} from 'react-native';
import Form from './components/Form';
import {Container, KeyboardAvoidingView, ScrollView} from './SignIn.styles';

const SignIn = () => {
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <Form />
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default SignIn;
