import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";
import React, { useState } from 'react'
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

import { Feather } from "@expo/vector-icons";

import styles from "./styles";

export default function Login({ navigation }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        const loginData = {
            username: username,
            password: password,
        };

        axios
            .post('http://127.0.0.1:8000/token/', loginData, {
                headers: { 'Content-Type': 'application/json; charset=UTF-8' },
            })
           
            .then((response) => {
                const token_cli = response.data.access;
                console.log(token_cli);
                // Faça algo com o token, se necessário
                navigation.navigate('Home2')
                localStorage.setItem("username", username)
            })
            
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <View style={styles.pageFull}>
            <View>
            <View style={styles.to_go_back}>
                    <Ionicons name={"chevron-back-outline"} size={30} color='#D81E1E'
                        onPress={() => navigation.navigate('Home')}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.txt}>
                        Login
                    </Text>
                </View>

                <View style={styles.inputs}>
                    <Text style={styles.txtInput}>Username: </Text>
                    <TextInput
                        style={styles.input}
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                        placeholder='Digite seu email'
                        placeholderTextColor={'#ababab'}
                        keyboardType='text'
                        
                    />
                    <Text style={styles.txtInput}>Senha: </Text>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.input}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        placeholder='Digite sua senha'
                        placeholderTextColor={'#ababab'}
                        keyboardType='text'
                    />
                </View>
                <View style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.button}
                        onPress={handleSubmit}
                    >
                        <Text style={{ color: '#fff', fontSize: 16 }}>Login</Text>
                    </TouchableOpacity>
                </View>
            
            </View>
        </View>
    )
}