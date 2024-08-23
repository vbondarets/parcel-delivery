/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Schema } from 'joi';
import validation from '../validation/validation';
import { setError } from '../setError/setError';

export const onSubmit = (
  schema: Schema,
  body: object,
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>,
  callback: () => void
) => {
  const result = validation(schema, body);
  if (result.message !== 'ok') {
    setError(result.message, setErrorMessage);
  } else {
    callback();
  }
};
