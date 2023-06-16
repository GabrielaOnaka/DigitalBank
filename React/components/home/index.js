import { View, Text, TouchableOpacity, TextInput, Image, Button } from "react-native";
import styles from "./styles";
import Login from "../login";
import Cadastro from "../cadastro";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require("/assets/OnakaBank.jpg")} style={styles.image} />
            {/* <Text>make your first login</Text> */}
            <Text></Text>
            <View style={styles.btn}>
                <TouchableOpacity
                    onPress={() => navigation.navigate(Login)}
                >
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.btn}>
                <TouchableOpacity
                    onPress={() => navigation.navigate(Cadastro)}
                >
                    <Text>Cadastro</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}