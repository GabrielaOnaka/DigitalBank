import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import axios from 'axios';
import styles from './styles';
import { Ionicons } from "@expo/vector-icons";

export default function Cadastro({ navigation }) {
    const [nome, setNome] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [cpf, setCpf] = useState('');
    const [image, setImagem] = useState(null);


    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('dataNasc', dataNasc);
            formData.append('cpf', cpf);
            formData.append('image', image)

            const response = await axios.post('http://127.0.0.1:8000/api_cliente/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data); // Exibe a resposta da API no console

            // Limpa o formulário
            setNome('');
            setDataNasc('');
            setCpf('');
            setImagem(null);

            alert('Cliente cadastrado com sucesso!');
            navigation.navigate('CadUser');
        } catch (error) {
            alert('Erro ao cadastrar cliente!');
            console.error(error);
        }
    };

    return (

        <View style={styles.pageFull}>
            <View>
            <View style={styles.to_go_back}>
                    <Ionicons name={"chevron-back-outline"} size={30} color='#D81E1E'
                        onPress={() => navigation.navigate('Home')}
                    />
                </View>
            </View>
            
            <View style={styles.inputs}>
                <View style={styles.input}>
                    <Text style={styles.label}>Nome:</Text>
                    <TextInput
                        value={nome}
                        onChangeText={text => setNome(text)}
                        style={styles.txtInput}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Data de Nascimento:</Text>
                    <TextInput
                        value={dataNasc}
                        onChangeText={text => setDataNasc(text)}
                        style={styles.txtInput}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>CPF:</Text>
                    <TextInput
                        value={cpf}
                        onChangeText={text => setCpf(text)}
                        style={styles.txtInput}
                    />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Imagem:</Text>
                    <input
                        type="file"
                        onChange={e => {
                            setImagem(e.target.files[0])
                        }}
                    />
                </View>
            </View>

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </View>
    );
}
