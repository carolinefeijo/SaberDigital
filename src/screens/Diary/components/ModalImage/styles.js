import { StyleSheet } from 'react-native'
import * as C from '../../../../constants/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: C.white.color0,
        marginHorizontal: 3,
        borderRadius: 9,
        height: 330
    },
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 25,
    },
    logoAgenda: {
        width: 22,
        height: 22
    },
    titleObs: {
        fontFamily: 'Quicksand-SemiBold',
        fontSize: 14,
        color: C.darkGrey.color10
    },
    lineContainer: {
        marginTop: 15,
        backgroundColor: C.GreyCard.color10,
        alignItems: 'center',
        width: '100%',
        height: 2
    },
    imageDescription: {
        marginHorizontal: 30,
        height: 150,
        marginTop: 10
    },
    descriptionContainer: {
        marginHorizontal: 30,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    titleDescription: {
        fontFamily: 'Quicksand-Regular',
        fontSize: 12,
        color: C.darkGrey.color30
    }
});
export default styles;