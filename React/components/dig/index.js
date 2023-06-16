import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import styles from './styles';
import { Ionicons } from "@expo/vector-icons";
import Pay from '../pay';
import Transf from '../transf';
import { Button } from 'react-native-web';


export default function Dig({ navigation }) {
    return (
        <View>

            <View style={styles.navbar}>
                <Ionicons name="camera-outline" size={30} style={styles.icon} onPress={() => navigation.navigate('Transf')}></Ionicons>
                
                <Text style={styles.texto}>Código de barras</Text>
                <Text style={styles.texto2}>Digite o código de barras do seu boleto</Text>
            </View>

            <View style={styles.flor}>
                <TextInput
                    style={styles.nome}
                    placeholder='Digite seu codigo'
                />
            </View>

            <View style={styles.colar}>
                <Text style={{ color: "#D81E1E" }}>Colar código</Text>
            </View>

            <View style={styles.sla}>
            <View style={styles.conf}>
                <Text onPress={() => navigation.navigate('Env')}>Confirmar</Text>
            </View>
            <View style={styles.back}>
                <Text onPress={() => navigation.navigate('Pay')}>Voltar</Text>
            </View>
            </View>
          


        </View>
    )
}