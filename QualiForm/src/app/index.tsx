import { useState } from "react";
import { View, StyleSheet, Image, TextInput, Text, Linking, TouchableOpacity, Alert } from "react-native";
import { router } from "expo-router";

export default function Index() {
    
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");

    const handleEmail = () => {
        const email = 'suporte.ti@grupofacilitti.com.br';
        const subject = 'Problema com o Login';
        const body = '';
        const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        Linking.openURL(url).catch(err => console.error('Erro ao tentar abrir o e-mail', err));
    };

    const handleLogin = () => {
        const usuarios = [
            { cpf: "123.456.789-00", senha: "admin123", rota: "/userAdmin" },  // Admin
            { cpf: "987.654.321-00", senha: "user123", rota: "/userCommon" } // Usuário comum
        ];

        // Verificando o CPF e a senha
        const usuarioEncontrado = usuarios.find(usuario => usuario.cpf === cpf && usuario.senha === senha);

        if (usuarioEncontrado) {
            // Se encontrado, navega para a rota correspondente
            router.push(usuarioEncontrado.rota); // Usando 'push' para navegar corretamente
        } else {
            Alert.alert("Erro", "CPF ou senha incorretos!");
        }
    };

    return (
        <View style={style.container}>
            <Image source={require('@/assets/images/nutrik-logo.png')} style={style.img} />

            <TextInput 
                style={style.input} 
                placeholder="Digite o CPF"
                keyboardType="numeric"
                value={cpf}
                onChangeText={setCpf}
            />
            
            <TextInput 
                style={style.input} 
                placeholder="Digite a senha" 
                secureTextEntry
                value={senha}
                onChangeText={setSenha}
            />

            <TouchableOpacity style={style.button} onPress={handleLogin}>
                <Text style={style.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleEmail}>
                <Text style={style.linkText}>Fale com o suporte</Text>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#660000",
        flexDirection: 'column',
        gap: 15,
        height: "100%",
        overflow: "hidden"
    },

    img: {
        width: 300,
        height: 300,
        resizeMode: "contain",
    },

    input: {
        width: '80%',
        height: 40,
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
    },

    button: {
        backgroundColor: "#333", // Botão escuro
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },

    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },

    linkText: {
        color: '#1E90FF',
        fontSize: 18,
        textDecorationLine: 'underline',
        marginTop: 10,
    },
});
