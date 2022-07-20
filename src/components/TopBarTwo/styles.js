import { StyleSheet } from 'react-native'
import * as C from '../../constants/colors';

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
        justifyContent: 'space-between',
    },
    title: {
       marginRight: 5,
        fontSize: 18,
        fontWeight: '400',
        fontFamily: 'Quicksand-Medium',
        color: C.darkGrey.color10
    },
    iconArrow: {
        width: 12.64, 
        height: 21.45
    }


});
export default styles;