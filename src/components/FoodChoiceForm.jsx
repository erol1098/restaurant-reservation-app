import React from 'react';

import { Field, Form } from 'formik';
import { FaRegTimesCircle } from 'react-icons/fa';

import FormWrapper from '../Layouts/Form/Form';

const FoodChoiceForm = ({ values, handleChange, errors, onCancel }) => {
  return (
    <FormWrapper>
      <FaRegTimesCircle size={30} onClick={() => onCancel()} />
      <Form>
        <b>Ingredients (Select 1 to 3)</b>
        <div className='checkbox-group'>
          <Field type='checkbox' name='ingredients' id='meat' value='Meat' />
          <label htmlFor='meat'>Meat</label>

          <Field
            type='checkbox'
            name='ingredients'
            id='vegetables'
            value='Vegetables'
          />
          <label htmlFor='vegetables'>Vegetables</label>

          <Field type='checkbox' name='ingredients' id='rice' value='Rice' />
          <label htmlFor='rice'>Rice</label>

          <Field
            type='checkbox'
            name='ingredients'
            id='salads'
            value='Salads'
          />
          <label htmlFor='salads'>Salads</label>
        </div>
        {errors.ingredients && <p>* {errors.ingredients}</p>}
        <b>Drink</b>
        <div>
          <Field type='radio' name='drink' id='soda' value='Soda' />
          <label htmlFor='soda'>Soda</label>

          <Field type='radio' name='drink' id='ayran' value='Ayran' />
          <label htmlFor='ayran'>Ayran</label>

          <Field type='radio' name='drink' id='wine' value='Wine' />
          <label htmlFor='wine'>Wine</label>

          <Field type='radio' name='drink' id='n/a' value='N/A' />
          <label htmlFor='n/a'>No Drink</label>
        </div>

        <label htmlFor='additional'>
          <b> Additional Requests</b>
        </label>
        <textarea
          name='additional'
          id='additional'
          placeholder='Enter your additional requests (Optional)'
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
