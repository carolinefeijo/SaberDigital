import { StyleSheet } from 'react-native'
import * as C from '../../../../constants/colors'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 25
    },
    mainContainer: {
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontFamily: 'Quicksand-Medium',
        color: C.black.color10
    },
    information: {
        marginTop: 5,
        fontSize: 12,
        fontFamily: 'Quicksand-Medium',
        color: C.lightGray.color30
    }
});
export default styles;