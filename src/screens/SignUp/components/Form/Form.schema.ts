import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().email().required('required'),
  password: yup.string().min(8).required('required'),
  retypePassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'passwords must match')
    .required('required'),
});

export default schema;
