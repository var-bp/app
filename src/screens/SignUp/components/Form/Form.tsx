import React, {useCallback} from 'react';
import {Text} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {
  Button,
  InputLabel,
  Link,
  TextInput,
  RequiredText,
  Icon,
  RadioGroup,
} from '../../../../shared';
import {Black, Yellow} from '../../../../helpers/colors';
import {RenderFn} from './Form.types';
import {
  Container,
  User,
  Row,
  LoginTextContainer,
  LoginText,
} from './Form.styles';

const RULES = {required: true};
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
  const navigation = useNavigation();
  const {control, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {};
  const handleSignUp = () => {
    handleSubmit(onSubmit);
  };
  const renderFirstName = useCallback(
    ({onChange, onBlur, value}: RenderFn) => (
      <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
    ),
    [],
  );
  const renderLastName = useCallback(
    ({onChange, onBlur, value}: RenderFn) => (
      <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
    ),
    [],
  );
  const renderEmail = useCallback(
    ({onChange, onBlur, value}: RenderFn) => (
      <TextInput
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        autoCompleteType="email"
        keyboardType="email-address"
      />
    ),
    [],
  );
  const renderPassword = useCallback(
    ({onChange, onBlur, value}: RenderFn) => (
      <TextInput
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        secureTextEntry
        autoCompleteType="password"
      />
    ),
    [],
  );
  const renderRetypePassword = useCallback(
    ({onChange, onBlur, value}: RenderFn) => (
      <TextInput
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        secureTextEntry
        autoCompleteType="password"
      />
    ),
    [],
  );

  return (
    <Container>
      <User>
        <Icon name="form" size={100} color={Black[2]} />
      </User>
      <Row height="90px">
        <InputLabel>First name</InputLabel>
        <Controller
          control={control}
          render={renderFirstName}
          name="firstName"
          rules={RULES}
          defaultValue=""
        />
        {errors.firstName && <RequiredText>Required</RequiredText>}
      </Row>
      <Row height="85px">
        <InputLabel>Last name</InputLabel>
        <Controller
          control={control}
          render={renderLastName}
          name="lastName"
          rules={RULES}
          defaultValue=""
        />
        {errors.lastName && <RequiredText>Required</RequiredText>}
      </Row>
      <Row height="85px">
        <InputLabel>Email</InputLabel>
        <Controller
          control={control}
          render={renderEmail}
          name="email"
          rules={RULES}
          defaultValue=""
        />
        {errors.lastName && <RequiredText>Required</RequiredText>}
      </Row>
      <Row height="85px">
        <InputLabel>Password</InputLabel>
        <Controller
          control={control}
          render={renderPassword}
          name="password"
          rules={RULES}
          defaultValue=""
        />
        {errors.password && <RequiredText>Required</RequiredText>}
      </Row>
      <Row height="85px">
        <InputLabel>Retype password</InputLabel>
        <Controller
          control={control}
          render={renderRetypePassword}
          name="retypePassword"
          rules={RULES}
          defaultValue=""
        />
        {errors.retypePassword && <RequiredText>Required</RequiredText>}
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
        <Link onPress={() => {}}>Login now</Link>
      </LoginTextContainer>
    </Container>
  );
};

export default Form;
