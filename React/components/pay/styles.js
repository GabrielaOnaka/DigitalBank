import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        height: 300,
        backgroundColor: '#cb0f06',
        width: '100%'
    
    },

    boxs: {
        width: '85%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

        // marginTop: '10%'
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

    inputs:{
        width: 190,
        height:50,
        backgroundColor: '#fff',
        fontSize:20,
        borderRadius:10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems:'center',
        display:"flex",
        marginLeft: 100
        
    },

    act:{
        paddingTop:130,
        fontSize: 20
    },
    pag:{
        fontSize:20,
        textAlign:'center'
    },
    input2:{
        marginTop:20,
        width: 190,
        height:50,
        backgroundColor: '#fff',
        fontSize:20,
        borderRadius:10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems:'center',
        display:"flex",
        marginLeft: 100
    }
})

export default styles