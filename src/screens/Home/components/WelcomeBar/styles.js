import { StyleSheet } from 'react-native'
import * as C from '../../../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    title: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 16,
        color: C.green
    },
    descriptionTitle: {
        fontFamily: 'Quicksand-Medium',
        fontSize: 13 ,
        color: C.green,
        marginTop: 5
    }
   

});
export default styles;