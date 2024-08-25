/* eslint-disable @typescript-eslint/no-explicit-any */
import Joi from 'joi';
import { EParcelType } from '../../../types/parcel.types';
import moment from 'moment';

const parcelSchema = Joi.object({
  city_from: Joi.string()
    .min(2)
    .max(50)
    .messages({
      'city_from.base': 'Wrong parametr',
      'string.max': 'City from is to long',
      'string.min': 'City from is to short',
      'any.required': 'City from is a required field'
    })
    .required(),
  city_to: Joi.string()
    .min(2)
    .max(50)
    .messages({
      'city_to.base': 'Wrong parametr',
      'string.max': 'City to si to long',
      'string.min': 'City to is to short',
      'any.required': 'City to is a required field'
    })
    .required(),
  date_of_dispatch: Joi.string()
    .custom((value: string, helpers: any) => {
      // Validate the date format using moment
      if (!moment(value, 'DD-MM-YYYY', true).isValid()) {
        return helpers.message('Date of dispatch should be in "DD-MM-YYYY" format');
      }
      // Check if the date is not earlier than today
      if (moment(value, 'DD-MM-YYYY').isBefore(moment(), 'day')) {
        return helpers.message('The date of dispatch cannot be earlier than today');
      }
      return value;
    })
    .messages({
      'date.pattern.base': 'Wrong parametr',
      'date.base': 'Date of dispatch should be a type of "date"',
      'any.required': 'Date of dispatch is a required field',
      'date.min': 'The date of dispatch cannot be earlier than today'
    })
    .required(),
  type: Joi.string()
    .valid(...Object.values(EParcelType))
    .messages({
      'type.base': 'Wrong parametr',
      'type.max': 'Type is to long',
      'type.min': 'Type is to short',
      'any.required': 'Type is a required field'
    })
    .required(),
  description: Joi.string()
    .min(3)
    .max(300)
    .messages({
      'description.base': 'Wrong parametr',
      'description.max': 'Description is to long',
      'description.min': 'Description is to short',
      'any.required': 'Description is a required field'
    })
    .when('type', [
      {
        is: Joi.equal(EParcelType['ORDER']),
        then: Joi.required()
      },
      {
        is: Joi.equal(EParcelType['DELIVER']),
        then: Joi.allow(null, '')
      }
    ]),
  category_id: Joi.string()
    .guid({ version: ['uuidv4', 'uuidv5'] })
    .min(3)
    .max(300)
    .messages({
      'category_id.base': 'Wrong parametr',
      'category_id.max': 'Category id is to long',
      'category_id.min': 'Category id is to short',
      'any.required': 'Category id is a required field'
    })
    .when('type', {
      is: Joi.equal(EParcelType['ORDER']),
      then: Joi.required()
    })
});

export default parcelSchema;
