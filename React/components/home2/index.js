import { View, Text, TouchableOpacity, TextInput, Image, } from "react-native";
import styles from "./styles";
import React, { useState, useEffect } from 'react';
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import axios from 'axios';
import Home from "../home";

import Editar from "../editar";
import Pay from "../pay";
import Extrato from "../extrato";
import Transf from "../transf";

export default function Home2({navigation}) {
    const [showOrHide, setShowOrHide] = useState(true)
    const [nomeCliente, setNomeCliente] = useState('');
    const nome = localStorage.getItem("username")
    // const [ name, setName ] = useState();

    // useEffect(() => {
    //     fetchNomeCliente(); // Função para buscar o nome do cliente
    // }, []);

    // const fetchNomeCliente = async () => {
    //     try {
    //         const response = await axios.get('http://127.0.0.1:8000/api_cliente/1'); // Substitua pelo endpoint correto da sua API

    //         const { nome } = response.data; // Supondo que a resposta da API possui um campo "nome"

    //         setNomeCliente(nome); // Atualiza o estado com o nome do cliente
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <View style={styles.infouser}>
                    <View style={styles.exit1}>
                        <Ionicons name="exit-outline" size={30} color={'#000'}
                            onPress={() => navigation.navigate(Home)}
                        />
                        <View style={styles.nome1}>
                            <Text style={styles.nome2}>
                                <Ionicons style={styles.oi} name={"person-circle-outline"} size={30} color={'#000'} onPress={() => navigation.navigate(Editar)} /> Olá {nome}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.saldo}>
                        Veja seu saldo atual
                    </Text>
                    <View style={styles.balanceArea}>
                        <Text style={styles.txtBalance}>{showOrHide ? <Text><Text style={styles.txtMoney}>R$</Text>50,38</Text> : <Text style={styles.balanceBlock}>R$ 50,38</Text>}</Text>
                        <TouchableOpacity
                            style={styles.eyeIcon}
                            onPress={() => setShowOrHide(!showOrHide)}
                        >

                            {showOrHide ?
                                <Feather name="eye" size={20} color='#FFF' />
                                :
                                <Feather name="eye-off" size={20} color='#FFF' />
                            }
                        </TouchableOpacity>

                    </View>
                    <Text style={styles.ext} onPress={() => navigation.navigate(Extrato)}>Ver extrato</Text>
                </View>
            </View>
            <View style={styles.boxs}>
                <View style={styles.box}><View style={styles.iconBox}><Ionicons name={"card-outline"} size={30} color='#D81E1E' /></View><Text style={styles.txtIcon}>Cartões</Text></View>
                <View style={styles.box}><View style={styles.iconBox}><Ionicons name={"gift-outline"} size={30} color='#D81E1E' /></View><Text style={styles.txtIcon}>Gift Card</Text></View>
                <View style={styles.box}><View style={styles.iconBox}><Ionicons name={"book-outline"} size={30} color='#D81E1E' /></View><Text style={styles.txtIcon}>Livros</Text></View>
                <View style={styles.box}><View style={styles.iconBox}><Ionicons name={"barcode-outline"} size={30} color='#D81E1E' onPress={() => navigation.navigate(Pay)} /></View><Text style={styles.txtIcon}>Pagamento</Text></View>
                <View style={styles.box}><View style={styles.iconBox}><Ionicons name={"bar-chart-outline"} size={30} color='#D81E1E' /></View><Text style={styles.txtIcon}>Investimento</Text></View>
                <View style={styles.box}><View style={styles.iconBox}><Ionicons name={"cash-outline"} size={30} color='#D81E1E' /></View><Text style={styles.txtIcon}>Transferências</Text></View>
            </View>
            {/* <Image source={require("/assets/OnakaBank.png")} style={styles.image} /> */}
        </View>
    )
}