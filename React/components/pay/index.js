import { View, Text, TouchableOpacity, TextInput, Image, } from "react-native";
import styles from "./styles";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Transf from "../transf";
import Dig from "../dig";
// import Routers from "../../Routers";
// import Home2 from "../home2";


export default function Pay({ navigation }) {
    return (


        <View style={styles.container}>
            <View style={styles.to_go_back}>
                <Ionicons name={"chevron-back-outline"} size={30} color='#fff'
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            <Text style={styles.pag}>Pagamentos</Text>
            
            <View style={styles.inputs}>
                <Text> <Ionicons name={"scan-outline"} size={20} color={'#000'} onPress={() => navigation.navigate(Transf)}></Ionicons>Escanear</Text>
            </View>
            <View style={styles.input2}>
                <Text> <Ionicons name={"apps-outline"} size={20} color={'#000'} onPress={() => navigation.navigate(Dig)} ></Ionicons>Digitar</Text>
            </View>
            
            <Text style={styles.act}>Mais ações </Text>

            <View style={styles.boxs}>
                <View style={styles.box}><View style={styles.iconBox}><Ionicons name={"card-outline"} size={30} color='#D81E1E' /></View><Text style={styles.txtIcon}>Cartões</Text></View>
                <View style={styles.box}><View style={styles.iconBox}><Ionicons name={"gift-outline"} size={30} color='#D81E1E' /></View><Text style={styles.txtIcon}>Gift Card</Text></View>
                <View style={styles.box}><View style={styles.iconBox}><Ionicons name={"book-outline"} size={30} color='#D81E1E' /></View><Text style={styles.txtIcon}>Livros</Text></View>
                <View style={styles.box}><View style={styles.iconBox}><Ionicons name={"barcode-outline"} size={30} color='#D81E1E' onPress={() => navigation.navigate(Pay)} /></View><Text style={styles.txtIcon}>Pagamento</Text></View>
                <View style={styles.box}><View style={styles.iconBox}><Ionicons name={"bar-chart-outline"} size={30} color='#D81E1E' /></View><Text style={styles.txtIcon}>Investimento</Text></View>
                <View style={styles.box}><View style={styles.iconBox}><Ionicons name={"cash-outline"} size={30} color='#D81E1E' onPress={() => navigation.navigate(Transf)} /></View><Text style={styles.txtIcon}>Transferências</Text></View>
            </View>

        </View>

    )
}