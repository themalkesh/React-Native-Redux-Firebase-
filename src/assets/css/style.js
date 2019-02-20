import { StyleSheet} from 'react-native';
import common from './common';
import theme from './theme';

export default  StyleSheet.create({
    container: {
        ...common.container,
         
    },
    innercontainer:{
        ...common.innercontainer
    },
    textInput: {
        ...common.textInput
    },
    btncontainer: {
        ...common.btncontainer
    },
    btn: {
        ...common.btn,
    },
    btnText: {
        ...common.btnText,
    },
    logo:{
        ...common.logo
    },
    btnorange: {
        ...common.btn,
        backgroundColor: theme.SECONDARY_COLOR,
    }, 
    btnSecondary:{
        ...common.btn,
        backgroundColor: theme.BACKGROUND_COLOR_LIGHT,
    },
    btnSecondaryText: {
        ...common.btnText,
        color: theme.TEXT_COLOR_DARK,
    },
    logotext: {
        color: theme.TEXT_COLOR_DARK
    },
    inputcontainer:{
        ...common.inputcontainer,
    },
    logocontainer: {
        ...common.logocontainer,
    },
    logincontainer: {
        width: '100%',
        marginBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
    },
    profilecontainer:{
        width: '100%',
        marginBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
    },
    placeholder: {
        borderWidth: 1,
        borderColor: "black",
        backgroundColor: "#eee",
        width: "80%",
        height: 150
    },
    button: {
        margin: 8
    },
    previewImage: {
        width: "100%",
        height: "100%"
    },
    profileImgContainer: {
        marginLeft: 8,
        height: 80,
        width: 80,
        borderRadius: 40,
        overflow: 'hidden',
        borderColor:  theme.SECONDARY_COLOR, 
        borderWidth: 1,
        backgroundColor: "#eee",
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImg: {
        height: 80,
        width: 80,
        borderRadius: 40,
    },
    profileImageOuter:{
         
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputLabel:{
        fontWeight : 'bold',
        
    },
    addProject:{
        color:'#FFF',
        fontWeight: 'bold',
        paddingRight : 10
    },
    textAreaInput: {
        ...common.textInput,
        height: 100,
        textAlignVertical: 'top'
        
    },
    previewImageText:{
        alignItems: 'center',
        justifyContent: 'center',
        width : '100%',
        alignContent: 'center',
        alignSelf: 'center',
    },
    flatListContainer:{
        width: '100%',
         
    },
    flatList:{
         
        width: '100%',
          
        
    },
    listItemContainer: {
        width:'100%',
         
        marginBottom : 15 ,
        paddingBottom: 15, 
        

    },
    listItem:{
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderBottomColor: theme.SECONDARY_COLOR,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    listImage:{
        marginRight : 20
    },
    listTitle:{
        fontWeight: "bold",
    },
    listContent:{

    },
    listTitleContent:{

    },
    listDescriptionContent:{

    },
    listDescription:{

    }
}) 