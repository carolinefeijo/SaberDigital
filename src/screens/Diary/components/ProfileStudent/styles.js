import { StyleSheet } from 'react-native'
import *  as C from '../../../../constants/colors'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    profileImgContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    profileTextContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    title: {
        fontFamily: 'Quicksand-Medium',
        fontSize: 14,
        color: C.darkGrey.color10
    },
    imageProfile: {
        width: 80,
        height: 80,
        borderRadius: 80
    },


});
export default styles;