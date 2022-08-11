import { StyleSheet } from 'react-native'
import * as C from '../../constants/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 60
    },
    mainContainer: {
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 150,
    },
    title: {
        fontFamily: 'Quicksand-Medium',
        fontSize: 15,
        color: C.darkGrey.color10
    },
    imgConnection: {
        width: 81,
        height: 65
    }

});
export default styles;