import React, {useRef, useCallback, useEffect} from 'react';
import {TextInput as RNTextInput} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers';
import {useNavigation} from '@react-navigation/native';
import {
  Button,
  InputLabel,
  Link,
  TextInput,
  RequiredText,
  Icon,
} from '../../../../shared';
import {Black, Blue, Yellow} from '../../../../helpers/colors';
import {IS_DEVELOPMENT} from '../../../../../env.json';
import {RenderFn, FormFields} from './Form.types';
import schema from './Form.schema';
import {Container, User, Row} from './Form.styles';

const Form = () => {
  const usernameRef = useRef<RNTextInput>(null);
  const passwordRef = useRef<RNTextInput>(null);

  const navigation = useNavigation();
  const {register, control, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormFields) => {
    if (IS_DEVELOPMENT) {
      console.log('SignIn onSubmit:', data);
    }
  };
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };
  const handleUsernameSubmitEditing = () => {
    passwordRef.current?.focus();
  };
  const renderUsername = useCallback(
    ({onChange, onBlur, value}: RenderFn) => (
      <TextInput
        ref={usernameRef}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        autoCompleteType="username"
        returnKeyType="next"
        onSubmitEditing={handleUsernameSubmitEditing}
      />
    ),
    [],
  );
  const renderPassword = useCallback(
    ({onChange, onBlur, value}: RenderFn) => (
      <TextInput
        ref={passwordRef}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        secureTextEntry
        autoCompleteType="password"
        returnKeyType="done"
      />
    ),
    [],
  );

  useEffect(() => {
    register('username');
    register('password');
  }, [register]);

  return (
    <Container>
      <User>
        <Icon name="user" size={100} color={Black[2]} />
      </User>
      <Row height="90px">
        <InputLabel>Username</InputLabel>
        <Controller
          control={control}
          render={renderUsername}
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
          render={renderPassword}
          name="password"
          defaultValue=""
        />
        {errors.password?.message && (
          <RequiredText>{errors.password?.message}</RequiredText>
        )}
      </Row>
      <Row marginBottom="40px" alignItems="flex-end">
        <Link onPress={() => {}}>Forgot Password?</Link>
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
