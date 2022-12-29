import * as Yup from 'yup';

export const loginValidationSchemas = Yup.object().shape({
    email: 
        Yup
        .string()
        .email('Debe ser un mail válido')
        .required('Campo requerido'),
    password:
        Yup
        .string()
        .min(5, 'Demasiado corta')
        .max(100, 'Hey! No demasiado larga')
        .required('Campor requerido')

})