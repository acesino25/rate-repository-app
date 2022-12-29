import { Platform } from "react-native";

const theme = {
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        textError: 'red',
        primary: '#0366d6',
        white: '#ffffff'
    },
    fontSizes: {
        body: 14,
        subheading: 16
    },
    fonts:{
        main: 'System'
    },
    fontWeights:{
        normal: '400',
        bold: '700'
    },
    appBar:{
        primary: Platform.select({ ios: 'red',  default:  '#1C1A1A'}), // WITH Platform.select({}) we can pass attributes an perform actions whether the user is a platform or other
        primaryText:  '#F6F4FB',
        secondaryText: '#27292E'

    }
}

export default theme;