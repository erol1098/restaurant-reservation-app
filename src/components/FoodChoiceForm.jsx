import React from 'react';

import { Field, Form } from 'formik';

import FormWrapper from '../Layouts/Form/Form';

const FoodChoiceForm = ({ values, handleChange, errors }) => {
  return (
    <FormWrapper>
      <Form>
        <label htmlFor='ingredients'>Ingredients (Select 1 to 3)</label>
        <div>
          <Field type='checkbox' name='ingredients' id='meat' value='meat' />
          <label htmlFor='meat'>Meat</label>

          <Field
            type='checkbox'
            name='ingredients'
            id='vegetables'
            value='vegetables'
          />
          <label htmlFor='vegetables'>Vegetables</label>

          <Field type='checkbox' name='ingredients' id='rice' value='rice' />
          <label htmlFor='rice'>Rice</label>

          <Field
            type='checkbox'
            name='ingredients'
            id='salads'
            value='salads'
          />
          <label htmlFor='salads'>Salads</label>
        </div>
        {errors.ingredients && <p>* {errors.ingredients}</p>}

        {/* <label htmlFor='drink'>Drink</label>
        <label htmlFor='additional'>Additional Requests</label>
        <textarea
          name='additional'
          id='additional'
          cols='30'
          rows='10'
        ></textarea> */}
        <button type='submit'>Submit</button>
      </Form>
    </FormWrapper>
  );
};

export default FoodChoiceForm;
