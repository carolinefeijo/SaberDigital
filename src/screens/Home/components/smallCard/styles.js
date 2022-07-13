import { StyleSheet } from 'react-native'
import * as C from '../../../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 23,
    },
    mainContainer: {
        width: '100%',
        height: 110,
        borderRadius: 7,
        flexDirection: 'row',
        marginBottom: 2,
        backgroundColor: '#FFFFFF',
        shadowColor: C.black.color10,
        shadowOffset: {
            width: 0,
            height: 5,
            
        },
        shadowOpacity: 0.58,
        elevation: 2,
    },
    imgContainer: {
        width: 86,
        height: 100,
        borderRadius: 8,
        flexDirection: 'row'
    },
    imgNew: {
        width: 86,
        height: 97,
        borderRadius: 8
    },
    textsContainer: {
        flex: 1,
        width: '90%',
        justifyContent: 'space-around',
        marginTop: 5,
        margin: 10,
    },
    title: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 13,
        color: C.darkGrey.color10
    },
    textsDescription: {
        marginTop: 5,
        fontFamily: 'Quicksand-Medium',
        fontSize: 11,
        color: C.darkGrey.color40
    },
    


});
export default styles;