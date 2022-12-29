import React from "react";
import { StyleSheet, TextInput } from "react-native";

const StyledTextInput = ({style = {}, error, ...props}) => {
    const inputStyles = [
        styles.textInput,
        style,
        error != null && styles.error
    ]
    
    return(
        <TextInput style={ inputStyles } {...props}/>
    )
}

const styles = StyleSheet.create({
    textInput:{
        borderRadius: 2,
        borderWidth: 2,
        borderColor: 'black',
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginBottom: 5
    },
    error: {
        borderColor: 'red'
    }
})

export default StyledTextInput;