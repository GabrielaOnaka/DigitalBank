import { View, Text, TouchableOpacity, TextInput, Image, } from "react-native";
import styles from "./styles"
import { Ionicons } from "@expo/vector-icons";
export default function Transf({navigation}){
    return(
        <View>
            <View style={styles.navbar}>
                <Text style={styles.tt}>Posicione o código de barras na área abaixo: </Text>
            </View>

            <View style={styles.container}>
                <View style={styles.camera}>
                    <View style={styles.line}></View>
                </View>

            </View>
            <View style={styles.scr}>
                <Text style={styles.dig}><Ionicons name="keypad-outline" size={25} style={styles.ico}></Ionicons>Digitar código</Text>
            </View>
            <View style={styles.back}>
                <Text onPress={() => navigation.navigate('Pay')}>Voltar</Text>
            </View>
        </View>
        
    )
}