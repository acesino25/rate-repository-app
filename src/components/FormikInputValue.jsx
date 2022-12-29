import React from "react";
import StyledTextInput from "./StyledTextInput";
import { useField } from "formik";
import StyledText from "./StyledText";

const FormkiInputValue = ({ name, ...props}) => {

    const [field, meta, helpers] = useField(name);

    return(
        <>
        <StyledTextInput
            error = {meta.error}
            value = {field.value}
            onChangeText = {value => helpers.setValue(value)}
            {...props}
        />
        {meta.error && <StyledText error>{meta.error}</StyledText>}
        </>
    )
}

export default FormkiInputValue;