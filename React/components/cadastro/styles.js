import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container:{
        width: '100%',
        height: 150,
        backgroundColor: '#FFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    txt:{
        fontSize: 40,
        color: '#F07E13',
    },

    // image:{
    //     width: 250,
    //     height: 250,
    // },
    
    inputs:{
        width: '100%',
        height: 350,
        backgroundColor: '#FFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    input:{
        width: 350,
        height: 50,
        borderBottomWidth: 1,
        borderColor: '#D81E1E',
        paddingLeft: 10,
        marginBottom: 20,
    },

    txtInput:{
        width: 350,
        justifyContent: 'flex-start'
    },

    button:{
        width: 200,
        height: 50,
        backgroundColor: '#D81E1E',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft:80
    },

    

    to_go_back:{
        width: '100%',
        height: 50,
        marginTop: 30,
        marginLeft: 30
    },
    linkRegister:{
        width: '100%',
        marginTop: 30,
        alignItems: 'center'
    },
    link:{
        color: '#4287f5',
        textDecorationLine: 'underline'
    },
    pageFull:{
        flex: 1,
        backgroundColor:'#FFF'
    },
    to_go_back:{
        width: '100%',
        height: 50,
        marginTop: 30,
        marginLeft: 30
    },

})

export default styles