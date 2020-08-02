import React, {useRef, useEffect} from 'react';
import {Text, TextInput as RNTextInput} from 'react-native';
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

const Form = () => {
  const lastNameRef = useRef<RNTextInput>(null);
  const emailRef = useRef<RNTextInput>(null);
  const passwordRef = useRef<RNTextInput>(null);
  const retypePasswordRef = useRef<RNTextInput>(null);

  const navigation = useNavigation();
  const {register, control, handleSubmit, errors} = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormFields) => {
    if (IS_DEVELOPMENT) {
      console.log('SignUp onSubmit:', data);
    }
  };
  const handleSignUp = () => {
    navigation.navigate('SignIn');
  };

  useEffect(() => {
    register('firstName');
    register('lastName');
    register('email');
    register('password');
    register('retypePassword');
  }, [register]);

  return (
    <Container>
      <User>
        <Icon name="form" size={100} color={Black[2]} />
      </User>
      <Row height="90px">
        <InputLabel>First name</InputLabel>
        <Controller
          control={control}
          render={({onChange, onBlur, value}: RenderFn) => (
            <TextInput
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
        <RadioGroup
          group={RADIO_GROUP}
          offsetLeft="35px"
          defaultChecked={RADIO_GROUP[0].value}
          onSelect={() => {}}
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
