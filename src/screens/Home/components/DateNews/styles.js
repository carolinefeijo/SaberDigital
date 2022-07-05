import { StyleSheet } from 'react-native'
import * as C from '../../../../constants/colors';

const styles = StyleSheet.create({
    container: {
        marginTop: 5
    },
    mainContainer: {
        width: '100%',
        height: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerIcon: {
        alignItems: 'center',
        width: 14,
        height: 14,
    },
    iconCalendar: {
        marginTop: 2,
        width: 10,
        height: 10
    },
    title: {
        marginLeft: 10,
        fontFamily: 'Quicksand-Medium',
        fontSize: 10,
        color: C.green
    }
});
export default styles;