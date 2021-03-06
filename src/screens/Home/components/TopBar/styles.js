import { StyleSheet } from 'react-native';
import * as C from '../../../../constants/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 12,  
    },
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconDrawer: {
        width: 18,
        height: 12
    },
    title: {
        fontSize: 20,
        fontFamily: 'Quicksand-Bold',
        color: C.darkGrey.color10
    }
});
export default styles;