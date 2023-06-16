import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, Picker } from 'react-native';
import axios from 'axios';
import styles from "../env/styles";

export default function Env(navigation) {

    const [selectedValue, setSelectedValue] = useState('');
    return (
        <View>
            <View style={styles.navbar}>
                <Text style={styles.tt}>Confirme as informações: </Text>
            </View>

            <View style={styles.box1}>
                <View style={styles.flor}>
                    <TextInput
                        style={styles.nome}
                        placeholder='Digite o valor à ser pago'
                    />
                </View>
            </View>

            <View style={styles.box2}>
                <Text>Confirme e digite as informações:</Text>
                <View style={styles.data}>
                    <TextInput
                        style={styles.nome}
                        placeholder='CPF'
                    />

                    <View>
                        <Text>Selecione uma opção:</Text>
                        <Picker

                            selectedValue={selectedValue}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Pix" value="opcao1" />
                            <Picker.Item label="Depósito" value="opcao2" />
                        </Picker>

                        <Text>Opção selecionada: {selectedValue}</Text>
                    </View>
                </View>
            </View>
        </View>


    )
}