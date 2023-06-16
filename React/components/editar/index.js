import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

export default function Editar() {
  const [nome, setNome] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [cpf, setCpf] = useState('');
  const [imagem, setImagem] = useState(null);
  const [clienteId, setClienteId] = useState('');

  useEffect(() => {
    // Obter os dados do cliente da API quando o componente for montado
    obterDadosCliente();
  }, []);

  const obterDadosCliente = async () => {
    try {
      const response = await axios.get(
        'http://127.0.0.1:8000/api_cliente/2ae325a8-5dbc-4eb6-a2db-6cd0162e11a2/' // Substitua pela URL correta da sua API para obter os dados do cliente
      );

      const cliente = response.data;
      setNome(cliente.nome);
      setDataNasc(cliente.dataNasc);
      setCpf(cliente.cpf);
      setClienteId(cliente.id);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('nome', nome);
      formData.append('dataNasc', dataNasc);
      formData.append('cpf', cpf);
      formData.append('imagem', imagem);

      const response = await axios.put(
        `http://127.0.0.1:8000/api_cliente/${clienteId}/`, // Substitua pela URL correta da sua API para atualizar as informações do cliente
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log(response.data); // Exibe a resposta da API no console

    } catch (error) {
      console.error(error);
    }
  };

  const handlePickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      return;
    }

    const imageResult = await ImagePicker.launchImageLibraryAsync();
    if (!imageResult.cancelled) {
      setImagem(imageResult.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edite as informações do cliente</Text>
      <View style={styles.imageContainer}>
        {/* Exibir a imagem selecionada */}
        {imagem && <Image source={{ uri: imagem }} style={styles.image} />}
        {/* Botão para selecionar imagem */}
        <Button title="Escolher Imagem" onPress={handlePickImage} />
      </View>
      <View style={styles.fields}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de nascimento"
          value={dataNasc}
          onChangeText={setDataNasc}
        />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={cpf}
          onChangeText={setCpf}
        />
        <Button title="Salvar" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  fields: {
    width: '100%',
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
};
