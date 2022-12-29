import React from "react";
import {Text, View, Image, StyleSheet} from 'react-native';
import StyledText from "./StyledText";
import theme from "./theme";

const RepositoryHeader = ({ownerAvatarUrl, id, fullName, description, language}) =>{
    return (
        <View style={styles.header}>

            <View>
                <Image style={styles.image} source={{uri: ownerAvatarUrl}}/>
            </View>
            <View style={styles.description}>
                <StyledText fontWeight='bold' fontSize='subheading'> {id} </StyledText>
                <StyledText >{fullName}</StyledText>
                <StyledText >{description}</StyledText>
                <StyledText style={styles.language}>{language}</StyledText>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row'
    },
    image:{
        width: 48,
        height: 48,
        borderRadius: 4
    },
    description:{
        // Le indicamos que la propiedad flex al momento en el que el espacio sea pequeño se activará y se desplazará
        flex: 1, 
        marginHorizontal: 10
    },
    language:{
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start'
    }
})

export default RepositoryHeader;