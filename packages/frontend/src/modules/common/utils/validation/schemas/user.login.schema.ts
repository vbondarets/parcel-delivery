import Joi from 'joi';

export const userLoginSchema = Joi.object({
  email: Joi.string()
    .min(5)
    .max(50)
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'ua', 'me'] }
    })
    .messages({
      'email.base': 'Wrong parametr',
      'string.max': 'Email to long',
      'string.min': 'Email to short',
      'any.required': 'Email is a required field'
    })
    .required(),
  password: Joi.string()
    .min(3)
    .messages({
      'string.pattern.base': 'Wrong parametr',
      'string.base': 'Password should be a type of "string"',
      'string.max': 'Password to long',
      'string.min': 'Password to short',
      'any.required': 'Password is a required field'
    })
    .required()
});
