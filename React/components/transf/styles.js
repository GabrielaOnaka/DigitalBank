import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    navbar:{
        width:'100%',
        height: 60,
        backgroundColor: '#D81E1E', 
      
    },

    tt:{
        textAlign:"center",
        color:"#fff",
        padding:20
    },

    scr:{
        padding:15,
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
       
    },

    container:{
        justifyContent:"center",
        alignItems:"center",
        display:"flex"
    },

    camera:{
        width:140,
        height:500,
        backgroundColor:'#DBDBDB',
        marginTop:29,
        borderWidth: 2, 
        borderColor: "#000"
        
    },
    
    line:{
        width:5,
        height:500,
        color:"#a80",
        borderWidth: 2, 
        borderColor: "#a80",
        justifyContent: "center",
        alignItems:"center",
        display:"flex"
    },

    dig:{
        
        width:150,
        height:50,
        backgroundColor: '#D81E1E',
        padding:5,
        borderRadius:20,
        padding:10
        
        
    },
    ico:{
        alignItems:"center"
    },

     back:{
        backgroundColor:"#D81E1E",
        width:150,
        height:50,
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        display:"flex",
        borderRadius:20,
        
        marginLeft: 110
    },
})

export default styles