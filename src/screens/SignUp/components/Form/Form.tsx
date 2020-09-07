import React, {useRef, useEffect, useCallback} from 'react';
import {Text, TextInput as RNTextInput} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Button,
  InputLabel,
  Link,
  TextInput,
  RequiredText,
  Icon,
  RadioGroup,
} from 'shared';
import {Black, Yellow} from 'helpers/colors';
import {IS_DEVELOPMENT} from 'env';
import {RenderFn, FormFields} from './Form.types';
import schema from './Form.schema';
import {
  Container,
  User,
  Row,
  LoginTextContainer,
  LoginText,
} from './Form.styles';

const RADIO_GROUP = [
  {
    value: 'male',
    label: 'Male',
    isChecked: true,
    isDisabled: false,
  },
  {
    value: 'female',
    label: 'Female',
    isChecked: true,
    isDisabled: false,
  },
];

const SEND_TO_TEMP_STORAGE = async (value: object) => {
  try {
    await AsyncStorage.setItem('@TEMP_STORAGE', JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};

const Form = () => {
  const firstNameRef = useRef<RNTextInput>(null);
  const lastNameRef = useRef<RNTextInput>(null);
  const emailRef = useRef<RNTextInput>(null);
  const passwordRef = useRef<RNTextInput>(null);
  const retypePasswordRef = useRef<RNTextInput>(null);

  const navigation = useNavigation();
  const {register, control, handleSubmit, reset, errors} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormFields) => {
    if (IS_DEVELOPMENT) {
      console.log('SignUp onSubmit:', data);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {retypePassword, ...rest} = data;
    await SEND_TO_TEMP_STORAGE(rest);
    navigation.navigate('SignIn');
  };
  const handleSignUp = () => {
    navigation.navigate('SignIn');
  };

  useEffect(() => {
    register('username');
    register('firstName');
    register('lastName');
    register('email');
    register('password');
    register('retypePassword');
  }, [register]);

  useFocusEffect(
    useCallback(() => {
      // Do something when the screen is focused
      reset();
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [reset]),
  );

  return (
    <Container>
      <User>
        <Icon name="form" size={100} color={Black[2]} />
      </User>
      <Row height="90px">
        <InputLabel>Username</InputLabel>
        <Controller
          control={control}
          render={({onChange, onBlur, value}: RenderFn) => (
            <TextInput
              returnKeyType="next"
              autoCapitalize="none"
              onSubmitEditing={() => {
                firstNameRef.current?.focus();
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="username"
          defaultValue=""
        />
        {errors.username?.message && (
          <RequiredText>{errors.username.message}</RequiredText>
        )}
      </Row>
      <Row height="90px">
        <InputLabel>First name</InputLabel>
        <Controller
          control={control}
          render={({onChange, onBlur, value}: RenderFn) => (
            <TextInput
              ref={firstNameRef}
              returnKeyType="next"
              onSubmitEditing={() => {
                lastNameRef.current?.focus();
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="firstName"
          defaultValue=""
        />
        {errors.firstName?.message && (
          <RequiredText>{errors.firstName.message}</RequiredText>
        )}
      </Row>
      <Row height="85px">
        <InputLabel>Last name</InputLabel>
        <Controller
          control={control}
          render={({onChange, onBlur, value}: RenderFn) => (
            <TextInput
              ref={lastNameRef}
              returnKeyType="next"
              onSubmitEditing={() => {
                emailRef.current?.focus();
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="lastName"
          defaultValue=""
        />
        {errors.lastName?.message && (
          <RequiredText>{errors.lastName.message}</RequiredText>
        )}
      </Row>
      <Row height="85px">
        <InputLabel>Email</InputLabel>
        <Controller
          control={control}
          render={({onChange, onBlur, value}: RenderFn) => (
            <TextInput
              ref={emailRef}
              autoCompleteType="email"
              keyboardType="email-address"
              returnKeyType="next"
              autoCapitalize="none"
              onSubmitEditing={() => {
                passwordRef.current?.focus();
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
          defaultValue=""
        />
        {errors.email?.message && (
          <RequiredText>{errors.email.message}</RequiredText>
        )}
      </Row>
      <Row height="85px">
        <InputLabel>Password</InputLabel>
        <Controller
          control={control}
          render={({onChange, onBlur, value}: RenderFn) => (
            <TextInput
              ref={passwordRef}
              secureTextEntry
              autoCompleteType="password"
              returnKeyType="next"
              autoCapitalize="none"
              onSubmitEditing={() => {
                retypePasswordRef.current?.focus();
              }}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
          defaultValue=""
        />
        {errors.password?.message && (
          <RequiredText>{errors.password.message}</RequiredText>
        )}
      </Row>
      <Row height="90px">
        <InputLabel>Retype password</InputLabel>
        <Controller
          control={control}
          render={({onChange, onBlur, value}: RenderFn) => (
            <TextInput
              ref={retypePasswordRef}
              secureTextEntry
              autoCompleteType="password"
              returnKeyType="done"
              autoCapitalize="none"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="retypePassword"
          defaultValue=""
        />
        {errors.retypePassword?.message && (
          <RequiredText>{errors.retypePassword.message}</RequiredText>
        )}
      </Row>
      <Row marginBottom="40px">
        <Controller
          control={control}
          render={({onChange, value}: RenderFn) => (
            <RadioGroup
              group={RADIO_GROUP}
              offsetLeft="35px"
              value={value}
              onSelect={onChange}
            />
          )}
          name="gender"
          defaultValue={RADIO_GROUP[0].value}
        />
      </Row>
      <Row marginBottom="40px">
        <Button
          backgroundColor={Yellow[1]}
          color={Black[2]}
          onPress={handleSubmit(onSubmit)}>
          Signup
        </Button>
      </Row>
      <LoginTextContainer>
        <LoginText>Already have an account?</LoginText>
        <Text> </Text>
        <Link onPress={handleSignUp}>Login now</Link>
      </LoginTextContainer>
    </Container>
  );
};

export default Form;
