import { StyleSheet } from 'react-native'
import * as C from '../../../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    biggerContainer: {
        marginTop: 20
    },
    imgBigger: {
        width: '100%',
        height: 180
    },
    titleContainer: {
        marginTop: 9
    },
    titleNews: {
        fontSize: 13,
        fontFamily: 'Quicksand-Bold',
        color: C.darkGrey.color10
    },


});
export default styles;