import React from "react";
import {Text, StyleSheet} from 'react-native';
import theme from "./theme";

const styles = StyleSheet.create(
    {
        text: {
            fontSize: theme.fontSizes.body,
            color: theme.colors.textPrimary,
            fontFamily: theme.fonts.main,
            fontWeight: theme.fontWeights.normal
        },
        colorPrimary:{
            color: theme.colors.textPrimary
        },
        colorSecondary:{
            color: theme.colors.textSecondary
        },
        bold:{
            fontWeight: theme.fontWeights.bold
        },
        error:{
            color: theme.colors.textError,
            marginTop: -10,
            padding: 10,
            fontSize: 10
        },
        subheading:{
            fontSize: theme.fontSizes.subheading
        },
        textAlignCenter:{
            textAlign: 'center'
        }
    }
)

export default function StyledText({error, align, children, color, fontSize, fontWeight, style, ...restOfProps}){

    const textStyles = [
        styles.text,
        error && styles.error,
        align == 'center' && styles.textAlignCenter,
        color == 'primary' && styles.colorPrimary,
        color == 'secondary' && styles.colorSecondary,
        fontSize == 'subheading' && styles.bold,
        fontWeight == 'bold' && styles.bold,
        style
    ]
    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}