import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./components/home";
import Login from './components/login';
import Cadastro from "./components/cadastro";
import Home2 from "./components/home2";
import Editar from "./components/editar";
import Pay from "./components/pay";
import Extrato from "./components/extrato";
import Transf from "./components/transf";
import CadUser from "./components/cad-user";
import Dig from "./components/dig";
import Env from "./components/env";

const Pilha = createStackNavigator()
const Nav = createBottomTabNavigator()

function NavBar() {
    return (
        <Nav.Navigator 
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#FCFBF0',
                    borderTopColor: 'transparent',
                    paddingBottom: 1,
                    paddingTop: 1,
                },
                tabBarActiveTintColor: '#D81E1E',
                tabBarInactiveTintColor: '#000',
            }}
        >

            <Nav.Screen name="Home2"
                component={Home2}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="home" size={size} color={color} />
                    )
                }}
            />
            <Nav.Screen name=" Editar"
                component={Editar}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="person-outline" size={size} color={color} />
                    )
                }}
            />
            <Nav.Screen name="Pay"
                component={Pay}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="card" size={size} color={color} />
                    )
                }}
            />
        </Nav.Navigator>
    )
}

export default function Routers() {
    return (
        <NavigationContainer >
            <Pilha.Navigator>

                <Pilha.Screen
                    name="Home"
                    component={Home}
                    options={{headerShown: false}}
                />
                <Pilha.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                    name="Home2"
                    component={NavBar}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name=" Editar"
                    component={NavBar}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Pay"
                    component={NavBar}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Extrato"
                    component={Extrato}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Transf"
                    component={Transf}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                    name="CadUser"
                    component={CadUser}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                    name="Dig"
                    component={Dig}
                    options={{ headerShown: false }}
                />

                <Pilha.Screen
                name="Env"
                component={Env}
                options={{ headerShown: false}}
                />

            </Pilha.Navigator>
        </NavigationContainer>
    )
}