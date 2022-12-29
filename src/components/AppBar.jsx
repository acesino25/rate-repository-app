import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import theme from "./theme";
import Constants from 'expo-constants';
import StyledText from "./StyledText";
import { Link, useLocation } from "react-router-native";

const AppBarTab = ({children, to}) => {

    const {pathname} = useLocation();
    const active = pathname == to;

    const textStyles = [
        styles.text,
        active && styles.active
    ]

    return (
        <Link to={to}>
            <StyledText fontWeight='bold' style={textStyles}>{children}</StyledText>
        </Link>
    )
}

const AppBar = () =>{

    return(
        <View style={styles.container}>
            <ScrollView horizontal>
                <AppBarTab active to="/">Repositories</AppBarTab>
                <AppBarTab to="/signin">Log in</AppBarTab>
                <AppBarTab to="/signin">Info</AppBarTab>
                <AppBarTab to="/signin">Ayuda</AppBarTab>
                <AppBarTab to="/signin">Buscar</AppBarTab>
                <AppBarTab to="/signin">Log in</AppBarTab>
                <AppBarTab to="/signin">Info</AppBarTab>
                <AppBarTab to="/signin">Ayuda</AppBarTab>
                <AppBarTab to="/signin">Buscar</AppBarTab>
            </ScrollView>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight +10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    text:{
        color: theme.appBar.secondaryText,
        marginHorizontal: 10
    },
    active:{
        color: theme.appBar.primaryText
    }
})

export default AppBar;