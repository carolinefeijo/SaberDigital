import { StyleSheet } from 'react-native'
import * as C from '../../../../constants/colors';

const styles = StyleSheet.create({
    container: {
        padding: 25,
        backgroundColor: 'white'
    },
    mainContainer: {
        width: '100%',
        height: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        marginLeft: 100,
        fontSize: 18,
        fontWeight: '400',
        fontFamily: 'Quicksand-Medium',
        color: C.darkGrey.color10
    }


});
export default styles;