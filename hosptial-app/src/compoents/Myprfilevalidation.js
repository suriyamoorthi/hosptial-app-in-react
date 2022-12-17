import Joi from "joi";


export const prifileSchema =Joi.object({
    firstname: Joi.string().min(6).max(6).required().messages({
        'string.empty': `"First name" should be a required`,
        'string.min': ` "First name" must minmum 6 character`,
        'string.max': ` "First name" must maximum 6 character`,

    }),
    lastname: Joi.string().min(6).max(12).required().messages({
        'string.empty': `"Last name" should be a required`,
        'string.min': ` "Last name" must minmum 6 character`,
        'string.max': ` "Last name" must maximum 12 character`,
    }),

    age: Joi.number().integer().messages({
        'number.empty': `"Age" should be a required`,
    }),

    phonenumber: Joi.string().regex(/^[0-9]{10}$/).messages({
        'string.empty': `"phonenumber" should be a required`,
        'string.pattern.base': `Phone number must have 10 digits.`
    }).required(),

    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.empty': `"Email" should be a required`,
            'string.email': `"Email" should be a vaildemail`,

        }),
    password: Joi.string().alphanum().min(6).max(10).required().messages({
        'string.empty': `"Password" should be a required`,
        'string.min': ` "Password" must minmum 6 character`,
        'string.max': ` "Password" must maximum 12 character`,
    }),


    gender: Joi.string().required(),





    date: Joi.date().min("2001-01-01").required().messages({
        'string.empty': `"Date" should be a required`,

    }),

    formfile: Joi.string().label('image').messages({
        'string.empty': `"File"should be a required`,
    }),


    address: Joi.string().messages({
        'string.empty': `"Address" should be a required`,
    }),

    formfile: Joi.string().required().label('image'),

    // toggle: Joi.boolean().default(false),





    toggle: Joi.boolean().default(false),
});


  export const INTIAL_PROFILEVALUES ={
    firstname: "",
    lastname: "",
    age: "",
    phonenumber: "",
    email: "",
    password: "",
    gender: "male",
    date: "",
    formfile: "",
    address: "",
    // toggle: "",
   
}


export  const validate = (values) => {
    console.log("sumbitted12", values)
    const errors = {};
    console.log("Error",errors)
    const { error } =  prifileSchema.validate(values);
    if (error) {
        const [err] = error.details;
        errors[err.context.key] = err.message;
    }
    return errors;

};