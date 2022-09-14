import * as Yup from 'yup';
import moment from 'moment';

export const userInfoSchema = Yup.object().shape({
  firstName: Yup.string()
    .required('First name is a required field.')
    .min(2, 'First name must be at least 2 characters!')
    .max(20, 'First name must be at most 20 characters!'),
  lastName: Yup.string()
    .required('First name is a required field.')
    .min(2, 'Last name must be at least 2 characters!')
    .max(20, 'Last name must be at most 20 characters!'),
  // birth: Yup.string()
  //   .test('dateOfBirth', 'You must be 18 years or older', function (value) {
  //     return moment().diff(moment(value, 'YYYY-MM-DD'), 'years') >= 18;
  //   })
  //   .required('Birth Date is a required field.'),
  // birth: Yup.date().required('Please enter your age'),
  birth: Yup.date('YYYY-MM-DD')
    .required('Birth Date is a required field.')
    .test('birth', 'You must be at least 18 years old!', (value) => {
      return moment().diff(moment(value), 'years') >= 18;
    }),

  gender: Yup.string().required('Select Gender is a required field.'),
  // select: Yup.string().required(),
});
