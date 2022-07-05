import { StyleSheet } from 'react-native'
import * as C from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 25,
       
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
        color: C.green
    }


});
export default styles;