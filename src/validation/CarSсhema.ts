import Joi from "joi";

export const CarSchema = Joi.object({
        brand: Joi.string()
            .min(1)
            .max(20)
            .pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}/)
            .required()
            .messages({
                'string.empty': 'Should not be empty',
                'string.min': 'Brand should be at least 1 character',
                'string.max': 'Brand should be less than 10 character',
                'string.pattern.base': 'not like pattern',
                'string.required': 'Brand is required',
            }),

        year: Joi.number()
            .min(1990)
            .max(2024)
            .required()
            .messages({
                'number.min': 'Year should be older 1990 year',
                'number.max': 'Year should be younger or = 2024 year',
                'number.required': 'Year is required'
            }),

        price: Joi.number()
            .min(0)
            .max(1000000)
            .required()
            .messages({
                'number.min': 'Price should be more than 0',
                'number.max': 'Price should be less then 1000000',
                'number.required': 'Price is required'
            })

    }
);