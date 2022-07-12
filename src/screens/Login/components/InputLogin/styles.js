import { StyleSheet } from 'react-native'
import * as C from '../../../../constants/colors'

const styles = StyleSheet.create({
    container: {
        margin: 30,
    },
    passwordInputContainer: {
        borderBottomWidth: 1,
        flexDirection: 'row',
        borderBottomColor: C.lightGray2.color30,
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    dividerContainer: {
        margin: 20
    },
    divider: {
        alignItems: 'flex-end'
    },
    emailInput: {
        width: '100%',
        fontFamily: "Quicksand-Regular",
        fontSize: 16,
        color: '#3E3D3D'
    },
    passwordInput: {
        width: '90%',
        fontFamily: "Quicksand-Regular",
        fontSize: 16,
        color: '#3E3D3D'
    },
    buttonLogin: {
        width: '10%',
        alignItems: 'flex-end'
    },
    iconEye: {
        width: 19,
        height: 12
    },
    resetPassword: {
        marginTop: 5,
        fontFamily: 'Quicksand-Regular',
        fontSize: 12
    }


});
export default styles;