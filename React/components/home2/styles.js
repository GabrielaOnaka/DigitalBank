import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCFBF0',
        alignItems: 'center'
    },

    container2: {
        backgroundColor: '#D81E1E', 
        width: '100%',
        height: 180,
        alignItems: 'center',
        justifyContent:'center'
    },

    infouser:{
        width: '95%'
    },

    txt: {
        fontSize: 40,
        color: '#FFF',
    },

    image:{
        width: 500,
        height: 500
    },

    nome1:{
      justifyContent: 'center'
    },

    nome2: {
        fontFamily: 'Ysabeau',
        fontSize: 17
    },

    oi: {
        // alignItems: 'center'
        height: 30
    },

    saldo: {
        marginTop: 20,
        fontSize: 17,
    },

    valor: {
        fontSize: 20
    },

    exit1:{
        width: '100%',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
    },

    balanceArea: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
    },

    txtBalance: {
        color: '#FFF',
        fontSize: 20,
    },

    balanceBlock: {
        height: 20,
        backgroundColor: '#e5e5e5',
        borderRadius: 3,
        color: '#e5e5e5'
    },

    eyeIcon: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
    txtMoney: {
        fontSize:20
    },

    boxs: {
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: '10%'
    },

    box: {
        width: 110,
        height: 110,
        backgroundColor: '#dfdfdf',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },

    iconBox: {
        width: 50,
        height: 50,
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb',
        marginBottom: 5
    },

    txtIcon: {
        color: '#969696'
    },
})

export default styles