import { StyleSheet } from 'react-native'
import *  as C from '../../../../constants/colors'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 20,
        alignItems:'center',
        flexDirection: 'column'
    },
    mainContainer: {
        borderWidth: 1,
        width: '90%',
        height: 80,
        borderRadius: 15,
        borderColor: C.LineBorderCard.color10
    },

    toView: {
        flexDirection:'column',
        alignItems: 'center',
        width:60,
        height:60,
        marginTop:22,
    },
    iconEye: {
        width: 15,
        height: 10
    },
    titleHour:{
        marginTop: 8,
        fontFamily:'Quicksand-Bold',
        color: C.darkGrey.color10,
        fontSize: 12
    },
    lineView: {
       backgroundColor:C.LineBorderCard.color10,
        width:1,
        height:80
    },
    containerActivity: {
        flexDirection:'row',
        alignItems: 'center',
        marginTop: 10,
        justifyContent:'space-between',
        paddingHorizontal:8

    },
    titleDay: {
        fontFamily:'Quicksand-Medium',
        color:C.darkGrey.color10,
        fontSize: 13
    },
    Icon: {
        width: 10,
        height: 10
    },
    titleDetails: {
        fontFamily: 'Quicksand-Regular',
        fontSize: 11
    }



});
export default styles;