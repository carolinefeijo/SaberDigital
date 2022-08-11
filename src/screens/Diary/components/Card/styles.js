import { StyleSheet } from 'react-native'
import *  as C from '../../../../constants/colors'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'column'
    },
    mainContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        width: '93%',
        height: 95,
        borderRadius: 15,
        borderColor: C.LineBorderCard.color10,
    },
    toView: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 60,
        height: 60,
        marginTop: 22,  
    },
    iconEye: {
        width: 15,
        height: 10
    },
    titleHour: {
        marginTop: 8,
        fontFamily: 'Quicksand-Bold',
        color: C.darkGrey.color10,
        fontSize: 11
    },
    lineView: {
        backgroundColor: C.LineBorderCard.color10,
        width: 1,
        height: 94
    },
    mainCardContainer: {
        paddingHorizontal: 8,
        flexDirection: 'column',
        width: '80%',
        height: 90,
        justifyContent: 'space-around'
    },
    containerActivity: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'space-between',
    },
    titleDay: {
        fontFamily: 'Quicksand-Medium',
        color: C.darkGrey.color10,
        fontSize: 13
    },
    Icon: {
        width: 10,
        height: 10
    },
    containerDetails: {
        marginTop: 5 
    },
    titleDetails: {
        fontFamily: 'Quicksand-Regular',
        fontSize: 11
    },
    starsContainer: {
        flexDirection: 'row', 
        marginTop: 7,  
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    titleHourAgo: {
        fontFamily:'Quicksand-Regular',
        fontSize: 10,
        color: C.darkGrey.color60

    }



});
export default styles;