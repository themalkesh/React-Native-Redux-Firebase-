import { StyleSheet } from 'react-native';
import theme from './theme';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.PRIMARY_COLOR,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    innercontainer: {
        flex: 1,
        backgroundColor: theme.PRIMARY_COLOR, 
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: 15,
    },
    textInput: {
        color: theme.SECONDARY_COLOR,
        borderBottomColor: theme.SECONDARY_COLOR,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    btncontainer: {
        width: '100%',
        marginBottom: 15,
        paddingLeft: 30,
        paddingRight: 30,
    },
    btn: {
        width: '100%',
        backgroundColor: theme.SECONDARY_COLOR,
        height : 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        color: theme.TEXT_COLOR_LIGHT,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputcontainer:{
        marginBottom:10
    },
    logocontainer: {
        width: '100%',
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 30,
        paddingRight: 30 
    },
    logo : {
        width : '100%', 
        height : 80, 
        marginBottom: 10, 
    }, 
    textAreaInput:{
         
        height : 60
    }
      
}) 