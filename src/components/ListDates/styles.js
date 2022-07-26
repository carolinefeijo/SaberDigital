import { StyleSheet } from 'react-native'
import *  as C from '../../constants/colors'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        margin: 10
    },
    mainContainer: {
        width: 45,
        height: 45,
        alignItems: 'center',
        backgroundColor: C.GreyCard.color10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: C.blue.color10
    },
    borderBlueContainer: {
        borderWidth: 0.1,
        borderColor: 'blue'
    },
    titleDay: {
        marginTop: 4,
        marginRight: 2,
        fontFamily: 'Quicksand-Light',
        fontSize: 8,
        color: C.darkGrey.color10
    },
    titleNumber: {
        marginRight: 3,
        fontFamily: 'Quicksand-Medium',
        fontSize: 13,
        color: C.darkGrey.color10
    },
    ViewFlatlist: {
        alignItems: 'center',
        justifyContent: 'center'
    }

});
export default styles;