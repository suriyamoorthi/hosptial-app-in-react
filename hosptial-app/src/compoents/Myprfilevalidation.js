import Joi from "joi";


export const prifileSchema =Joi.object({
    Firstname: Joi.string().min(6).max(6).required().messages({
        'string.empty': `"First name" should be a required`,
        'string.min': ` "First name" must minmum 6 character`,
        'string.max': ` "First name" must maximum 6 character`,

    }),
    Lastname: Joi.string().min(6).max(12).required().messages({
        'string.empty': `"Last name" should be a required`,
        'string.min': ` "Last name" must minmum 6 character`,
        'string.max': ` "Last name" must maximum 12 character`,
    }),


    Email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.empty': `"Email" should be a required`,
            'string.email': `"Email" should be a vaildemail`,

        }),
     age: Joi.number().integer().messages({
        'number.empty': `"Age" should be a required`,
    }),


    Gender: Joi.string().required(),


    Phonenumber: Joi.string().regex(/^[0-9]{10}$/).messages({
        'string.empty': `"phonenumber" should be a required`,
        'string.pattern.base': `Phone number must have 10 digits.`
    }).required(),
   
    Date: Joi.date().min("2001-01-01").required().messages({
        'string.empty': `"Date" should be a required`,

    }),

    File: Joi.string().label('image').messages({
        'string.empty': `"File"should be a required`,
    }),


    Address: Joi.string().messages({
        'string.empty': `"Address" should be a required`,
    }),

    // formfile: Joi.string().required().label('image'),

    // toggle: Joi.boolean().default(false),





    toggle: Joi.boolean().default(false),
});


  export const INTIAL_PROFILEVALUES ={
    Firstname: "",
    Lastname: "",
    Email: "",
    Age: "",
    Gender: "male",
    Phonenumber: "",
    Dateofbirth: "",
    File: "",
    Address: "",
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