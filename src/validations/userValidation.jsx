import * as Yup from 'yup';

export const userInfoSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'First name must have 2 characters at least!')
    .max(20, 'First name must have 20 characters at most!')
    .required('Please dont leave empty!'),
  lastName: Yup.string().required(),
  birth: Yup.date(),
});
