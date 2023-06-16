import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 300,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },

    nome:{
        width: 350,
        height: 50,
        borderBottomWidth: 1,
        borderColor: '#D81E1E',
        paddingLeft: 10,
        marginBottom: 20,
       
    },

    button:{
        width: 200,
        height: 50,
        backgroundColor: '#D81E1E',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
        
    },

    txt:{
        fontSize: 20,
        color: '#D81E1E',
       padding:5,
       textAlign: 'center'
    },

    txt2:{
        fontSize: 20,
        color: '#D81E1E',
        padding:5
    }
    
})

export default styles