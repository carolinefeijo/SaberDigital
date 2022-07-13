import { StyleSheet } from 'react-native'
import * as C from '../../../../constants/colors';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    mainContainer: {
        backgroundColor: C.blue.color10,
        marginHorizontal: 30,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: C.white.color0,
        fontFamily: 'Quicksand-Bold',
        fontSize: 18
    }

});
export default styles;