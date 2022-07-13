import { StyleSheet } from 'react-native'
import * as C from '../../../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 15,
        color: C.darkGrey.color10
    },
    descriptionTitle: {
        fontFamily: 'Quicksand-Medium',
        fontSize: 13,
        color: C.darkGrey.color10,
        marginTop: 5
    }
});
export default styles;