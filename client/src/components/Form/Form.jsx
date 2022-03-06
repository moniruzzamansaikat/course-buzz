import React, { useState } from 'react';
import Input from './Input';
import Select from './Select';
import { useAuth } from '../../hooks/auth/useAuth';
import Loading from '../Loading/Loading';
import './Form.css';
import { useTranslation } from 'react-i18next';

function Form({ handler, inputs, disabledButton }) {
  const [errors, setErrors] = useState([]);
  const { formSubmitting: submitting, setFormSubmitting } = useAuth();
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitting(true);

    const data = {};
    const newErrors = [];
    for (let i = 0; i < inputs.length; i++) {
      const input = inputs[i];
      const value = e.target[input.name].value;

      // validate input
      if (value.toString().trim() === '') {
        newErrors.push({
          name: input.name,
          message: `${input.label} is required`,
        });
      } else {
        data[input.name] = value;
      }
    }

    // if there are errors, update the state
    if (newErrors.length > 0) {
      setFormSubmitting(false);
      setErrors(newErrors);
      return;
    } else {
      setErrors([]);
      e.target.reset();
      handler(data);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {inputs.map((input) =>
        input.type === 'select' ? (
          <Select
            label={input.label}
            name={input.name}
            options={input.options}
            key={input.name}
          />
        ) : (
          <Input
            key={input.name}
            name={input.name}
            type={input.type}
            label={input.label}
            {...input}
            error={errors.find((error) => error.name === input.name)?.message}
          />
        )
      )}

      <button
        className="btn btn-primary"
        type="submit"
        disabled={disabledButton}
      >
        {submitting ? <Loading /> : t('utils.submitText')}
      </button>
    </form>
  );
}

export default Form;
