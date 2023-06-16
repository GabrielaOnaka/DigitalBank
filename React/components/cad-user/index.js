import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import axios from 'axios';

export default function CadUser({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSuperUser] = useState(true);
  const [isStaff] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);

    const dados_usuario = {
      username: username,
      email: email,
      password: password,
      is_superuser: isSuperUser,
      is_staff: isStaff,
    };

    axios
      .post('http://127.0.0.1:8000/user/', dados_usuario, {
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      })
      .then((response) => {
        const resposta_servidor = response.data;
        console.log('Deu certo! Parabens Onaka')
        navigation.navigate('Login')
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Erro ao cadastrar usuário', 'Por favor, tente novamente.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <View>
      <View style={styles.container}>
        <View>
          <Text style={styles.txt}>Está quase lá, só precisa de mais algumas informações</Text>
        </View>
        <View>
          <Text style={styles.txt2}>Informações de Login:</Text>
        </View>

        <TextInput
          style={styles.nome}
          placeholder="Digite seu nome"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />

        <TextInput
          style={styles.nome}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.nome}
          placeholder="Digite sua senha"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.button}
          onPress={handleSubmit}
          disabled={isSubmitting}
    
        >
          <Text style={styles.buttonText}>{isSubmitting ? 'Enviando...' : 'Enviar' }</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 18,
    marginBottom: 10,
  },
  txt2: {
    fontSize: 16,
    marginBottom: 10,
  },
  nome: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 5,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
};
