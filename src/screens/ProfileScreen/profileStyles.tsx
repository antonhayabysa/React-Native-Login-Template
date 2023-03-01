import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');


export const profileStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        paddingVertical: 50,
        marginTop: height * 0.4 * 0.1,
    },
    containerUser: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    phoneInputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    logo: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        marginTop: height * 0.4 * 0.1,
        marginBottom: height * 0.4 * 0,
        alignSelf:'center',
    },
    titleTextName: {
        color:'#1F1D1D',
        marginTop: height * 0.3 * 0.11,
        fontSize: 24,
        marginBottom: height * 0.5 * 0.07,
        fontWeight:'500',
        textAlign:'center'
    },
    titleText: {
        color:'#9795A4',
        marginTop: -22,
        fontSize: 14,
        marginBottom: height * 0.5 * 0.07,
        fontWeight:'500',
        textAlign:'center'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    phoneInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    phoneCountryCodeInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 15,
        padding: 10,
        marginHorizontal: 10,
        width: '25%',
    },
    phoneInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 15,
        padding: 10,
        flex: 1,
    },
    codeLabel: {
        alignSelf: 'flex-start',
        marginTop: 9,
        marginLeft: 17,
    },
    codeLabelText: {
        fontSize: 14,
        color:'#9795A4',
        fontWeight:'500'
    },
    phoneCodeInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 5,
        marginRight: 5,
    },
    phoneCodeInputs: {
        justifyContent:'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
        width: '100%',
    },
    phoneCodeInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        height: 48,
        width: 48,
        borderRadius: 15,
        marginRight: 10,
        textAlign: 'center',
    },
    phoneCodeInputColor: {
        borderWidth: 1,
        borderColor: '#FFC612',
        height: 48,
        width: 48,
        borderRadius: 15,
        marginRight: 10,
        textAlign: 'center',
    },
    inputUp: {
        width: '100%',
        height: 40,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        borderRadius: 0,
        paddingHorizontal: 10,
        marginBottom: height * 0.5 * 0.05,
        alignSelf:'center',
    },
    passwordInputContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        borderRadius: 0,
        paddingHorizontal: 10,
        marginBottom: height * 0.5 * 0.03,
    },
    passwordInput: {
        flex: 1,
        height: '100%',
        marginRight: 20,
    },
    passwordToggleIcon: {
        position: 'absolute',
        right: 10,
        bottom: 8,
    },
    signUpButton: {
        alignItems: 'center',
        marginTop: 5,
        backgroundColor: '#FFC612',
        borderRadius: 20,
        width:'100%',
        height:62,
        justifyContent: 'center',
        alignSelf:'center',
    },
    signUpButtonText: {
        color: '#1F1D1D',
        fontSize: 18,
        fontWeight: 'bold',
    },
    linkText: {
        marginLeft: 44,
        flex: 1,
        textAlign: 'center',
        fontSize:18,
        fontWeight:'500',
        marginTop: height * 0.5 * 0.05,
        color: '#1F1D1D',
    },
    linkTextNext: {
        marginTop: height * 0.5 * 0.05,
        textAlign:'center',
        color: '#FFC612',
        fontSize:16,
        fontWeight:'500',
    },
});
