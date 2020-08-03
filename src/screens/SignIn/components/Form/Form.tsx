import React, {useRef, useEffect, useCallback} from 'react';
import {TextInput as RNTextInput} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {Button, InputLabel, Link, TextInput, RequiredText, Icon} from 'shared';
import {Black, Blue, Yellow} from 'helpers/colors';
import {IS_DEVELOPMENT} from 'env';
import {RenderFn, FormFields} from './Form.types';
import schema from './Form.schema';
import {Container, User, Row} from './Form.styles';

const GET_FROM_TEMP_STORAGE = async () => {
  try {
    const value = await AsyncStorage.getItem('@TEMP_STORAGE');
    return value != null ? JSON.parse(value) : null;
  } catch (e) {
    // error reading value
  }
};

const Form = () => {
  const usernameRef = useRef<RNTextInput>(null);
  const passwordRef = useRef<RNTextInput>(null);

  const navigation = useNavigation();
  const {register, control, handleSubmit, reset, errors} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormFields) => {
    if (IS_DEVELOPMENT) {
      console.log('SignIn onSubmit:', data);
    }
    const {username, password} = await GET_FROM_TEMP_STORAGE();
    // TODO: set custom error
  };
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };
  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  useEffect(() => {
    register('username');
    register('password');
  }, [register]);

  useFocusEffect(
    useCallback(() => {
      reset();
    }, [reset]),
  );

  return (
    <Container>
      <User>
        <Icon name="user" size={100} color={Black[2]} />
      </User>
      <Row height="90px">
        <InputLabel>Username</InputLabel>
        <Controller
          control={control}
          render={({onChange, onBlur, value}: RenderFn) => (
            <TextInput
              ref={usernameRef}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCompleteType="username"
              returnKeyType="next"
              autoCapitalize="none"
              onSubmitEditing={() => {
                passwordRef.current?.focus();
              }}
            />
          )}
          name="username"
          defaultValue=""
        />
        {errors.username?.message && (
          <RequiredText>{errors.username.message}</RequiredText>
        )}
      </Row>
      <Row height="85px">
        <InputLabel>Password</InputLabel>
        <Controller
          control={control}
          render={({onChange, onBlur, value}: RenderFn) => (
            <TextInput
              ref={passwordRef}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
              autoCapitalize="none"
              autoCompleteType="password"
            />
          )}
          name="password"
          defaultValue=""
        />
        {errors.password?.message && (
          <RequiredText>{errors.password?.message}</RequiredText>
        )}
      </Row>
      <Row marginBottom="40px" alignItems="flex-end">
        <Link onPress={handleForgotPassword}>Forgot Password?</Link>
      </Row>
      <Row marginBottom="35px">
        <Button backgroundColor={Blue[1]} onPress={handleSubmit(onSubmit)}>
          Login
        </Button>
      </Row>
      <Button
        backgroundColor={Yellow[1]}
        color={Black[2]}
        onPress={handleSignUp}>
        No account yet? Signup now
      </Button>
    </Container>
  );
};

export default Form;
