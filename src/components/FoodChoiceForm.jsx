import React from 'react';

import { Field, Form } from 'formik';

import FormWrapper from '../Layouts/Form/Form';

const FoodChoiceForm = ({ values, handleChange, errors }) => {
  return (
    <FormWrapper>
      <Form>
        <b>Ingredients (Select 1 to 3)</b>
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
        <br />
        <b>Drink</b>
        <div>
          <Field type='radio' name='drink' id='soda' value='soda' />
          <label htmlFor='soda'>Soda</label>

          <Field type='radio' name='drink' id='ayran' value='ayran' />
          <label htmlFor='ayran'>Ayran</label>

          <Field type='radio' name='drink' id='wine' value='wine' />
          <label htmlFor='wine'>Wine</label>

          <Field type='radio' name='drink' id='no' value='no' checked />
          <label htmlFor='no'>No Drink</label>
        </div>

        <label htmlFor='additional'>Additional Requests</label>
        <textarea
          name='additional'
          id='additional'
          cols='30'
          rows='5'
          value={values.additional}
          onChange={handleChange}
        ></textarea>
        {errors.additional && <p>* {errors.additional}</p>}

        <button type='submit'>Submit</button>
      </Form>
    </FormWrapper>
  );
};

export default FoodChoiceForm;
