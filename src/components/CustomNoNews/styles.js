import { StyleSheet } from 'react-native'
import * as C from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 90,
    },
    mainContainer: {
        alignItems: 'center',
    },
    titleMain: {
        fontFamily: 'Quicksand-Medium',
        fontSize: 15,
        color: C.darkGrey.color10
    },
    titleSecundary: {
        marginTop: 10,
        fontFamily: 'Quicksand-Regular',
        fontSize: 13,
        color: C.darkGrey.color30
    }



});
export default styles;