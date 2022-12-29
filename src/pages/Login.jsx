import { Formik } from "formik";
import React from "react";
import {View, Text, Button} from 'react-native';
import FormkiInputValue from "../components/FormikInputValue";
import StyledText from "../components/StyledText";
import { loginValidationSchemas } from "../validationSchemas/loginValidationSchema.js";

const Login = () => {

    const initialValues = {
        email: '',
        password: ''
    }

    return(
        <View>

            <Formik validationSchema={loginValidationSchemas} initialValues={initialValues} onSubmit={

                values => console.log(values)

            } >

                {
                    ({handleSubmit}) => {
                        return (
                            <View style={{}}>
                                <FormkiInputValue 
                                    name='email'
                                    placeholder='E-mail'/>
                                <FormkiInputValue 
                                    name='password'
                                    placeholder='Password'
                                    secureTextEntry
                                    />

                                <Button onPress={handleSubmit} title='Log in'/>
                            </View>
                        )
                    }
                }

            </Formik>
        
            <StyledText>Login Page</StyledText>

        </View>
    )
}

export default Login;