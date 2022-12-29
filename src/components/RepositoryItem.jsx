import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "./theme";
import RepositoryHeader from "./RepositoryHeader";

const RepositoryItem = (props) => {

    return(
    <View style={styles.container}>
        <RepositoryHeader {...props}/>
        <RepositoryStats {...props} />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    language:{
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start'
    }
})

export default RepositoryItem;