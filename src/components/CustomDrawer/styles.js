import { StyleSheet } from 'react-native'
import * as C from '../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    lineContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#F4F4F4'
    },
    dataUserContainer: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgProfile: {
        width: 55,
        height: 55,
        borderRadius: 55
    },
    userContainer: {
        flex: 1,
        alignItems: 'center',
    },
    username: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 15,
        color: '#4B4A4A'
    },
    role: {
        fontFamily: 'Quicksand-SemiBold',
        fontSize: 12,
        color: '#A5A4A4'
    },
    mainContainerSetting: {
        padding: 20
    },
    mainSetting: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    titleSetting: {
        marginLeft: 20,
        color: C.darkGrey.color60,
        fontFamily: 'Quicksand-Bold',
        fontSize: 14
    },
    mainGoOut: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 13
    },
    titleGoOut: {
        marginLeft: 22,
        color: C.darkGrey.color60,
        fontFamily: 'Quicksand-Bold',
        fontSize: 14
    }



});
export default styles;