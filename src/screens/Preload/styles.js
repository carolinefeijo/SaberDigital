import { StyleSheet } from 'react-native'
import * as C from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: C.white.color0,
    },
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleContainer: {
        marginLeft: 10
    },
    title: {
        fontFamily: 'Quicksand-Regular',
        color: C.darkGrey.color10,
        fontSize: 19
    },
    loadingContainer: {
        marginTop: 50
    }

});
export default styles;