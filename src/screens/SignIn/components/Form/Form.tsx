import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import {
  Button,
  Label,
  Link,
  TextInput,
  RequiredText,
  Icon,
} from '../../../../shared';
import {Black, Blue, Yellow} from '../../../../helpers/colors';
import {RenderFn} from './Form.types';
import {Container, User, Row} from './Form.styles';

const Form = () => {
  const navigation = useNavigation();
  const {control, handleSubmit, errors} = useForm();

  const rules = {required: true};

  const onSubmit = (data) => {};
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };
  const renderUserName = ({onChange, onBlur, value}: RenderFn) => (
    <TextInput
      onBlur={onBlur}
      onChangeText={onChange}
      value={value}
      autoCompleteType="username"
    />
  );
  const renderPassword = ({onChange, onBlur, value}: RenderFn) => (
    <TextInput
      onBlur={onBlur}
      onChangeText={onChange}
      value={value}
      secureTextEntry
      autoCompleteType="password"
    />
  );

  return (
    <Container>
      <User>
        <Icon name="user" size={100} color={Black[2]} />
      </User>
      <Row height="90px">
        <Label>User name</Label>
        <Controller
          control={control}
          render={renderUserName}
          name="firstName"
          rules={rules}
          defaultValue=""
        />
        {errors.firstName && <RequiredText>Required</RequiredText>}
      </Row>
      <Row height="85px">
        <Label>Password</Label>
        <Controller
          control={control}
          render={renderPassword}
          name="password"
          rules={rules}
          defaultValue=""
        />
        {errors.firstName && <RequiredText>Required</RequiredText>}
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
