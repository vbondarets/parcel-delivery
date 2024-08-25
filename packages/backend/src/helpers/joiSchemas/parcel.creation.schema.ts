import DateExtension from '@joi/date';
import * as JoiImport from 'joi';
import { EParcelType } from '../../types/parcel.type';

const Joi = JoiImport.extend(DateExtension);

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
  date_of_dispatch: Joi.date()
    .min('now')
    .format(['DD-MM-YYYY'])
    .messages({
      'date.pattern.base': 'Wrong parametr',
      'date.base': 'Date of dispatch should be a type of "date"',
      'any.required': 'Date of dispatch is a required field'
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
    .when('type', {
      is: Joi.equal(EParcelType['ORDER']),
      then: Joi.required()
    }),
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
