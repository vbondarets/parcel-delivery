import Joi from 'joi';

const categorySchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(50)
    .messages({
      'name.base': 'Wrong parametr',
      'string.max': 'Name to long',
      'string.min': 'Name to short',
      'any.required': 'Name is a required field'
    })
    .required()
});

export default categorySchema;
