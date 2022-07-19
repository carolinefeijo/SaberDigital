import { StyleSheet } from 'react-native'
import *  as C from '../../../../constants/colors'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        alignItems: 'center'
    },
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        width: '90%',
        height: 60,
        borderRadius: 6,
        backgroundColor: C.GreyCard.color10
    },
    imgChildren: {
        margin: 15,
        width: 43,
        height: 43,
        borderRadius: 30
    },
    informationsContainer: {
        flexDirection: 'column',
        marginBottom: 5
    },
    Name: {
        fontFamily: 'Quicksand-Medium',
        color: C.darkGrey.color10,
        fontSize: 13
    },
    class: {
        marginTop: 4,
        fontFamily: 'Quicksand-Regular',
        color: C.darkGrey.color30,
        fontSize: 11
    }

  

});
export default styles;