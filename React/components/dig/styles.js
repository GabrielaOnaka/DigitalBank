import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    navbar:{
        width:'100%',
        height: 60,
        backgroundColor: '#D81E1E', 
    },

    icon:{
        width: '100%',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
    },

    nome:{
        width: 350,
        height: 50,
        borderBottomWidth: 1,
        borderColor: '#D81E1E',
        paddingLeft: 30,
        marginBottom: 20,
        
    },

    flor:{
        alignItems:"center",
        justifyContent:"center",
        display:"flex",
        marginTop: 50
    },

    texto:{
        color:'white',
        textAlign: "center",
        fontSize: 15
    },

    texto2:{
        marginTop:20,
        textAlign:"center"
    },

    colar:{
        padding:20,
        textAlign:"center",
        color: "#D81E1E"
    },

    conf:{
        backgroundColor:"#D81E1E",
        width:140,
        height:50,
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        display:"flex",
        borderRadius:20,
        
        marginLeft: 130
    },

    back:{
        backgroundColor:"#D81E1E",
        width:140,
        height:50,
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        display:"flex",
        borderRadius:20,
        marginTop:10,
        marginLeft: 130
    },

    sla:{
        marginTop:180,

    }

   
})

export default styles