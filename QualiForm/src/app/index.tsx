import { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native"
import { useRouter } from 'expo-router';

export default function Index() {
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const router = useRouter(); // Instancia o roteador

    const handleLogin = () => {
        if ((cpf == '123' && senha == 'user@') || (cpf == '456' && senha == 'adm@')) {
            router.replace({ pathname: '/screens/menu', params: { cpf } });
        } else {
            alert('Usuario ou senha errados')
        }
    }

    return (
        <View style={styles.container}>

            <Image source={require("../../assets/images/nutrik-logo.png")} style={styles.image} />

            <View style={styles.containerInput}>
                <TextInput
                    style={styles.input}
                    placeholder="CPF"
                    placeholderTextColor={"#FFF"}
                    onChangeText={setCpf}
                    keyboardType='numeric'
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor={"#FFF"}
                    onChangeText={setSenha}
                />

                <Button title='Entrar' onPress={handleLogin} />
            </View>

            <Text style={styles.textLink}>Fale com o suporte</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#800020',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: "contain", // Ajusta a imagem sem cortar
    },
    input: {
        height: 40,
        width: 250,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,

        fontSize: 16,
        color: '#FFF'
    },
    containerInput: {
        gap: 5,
    },
    textLink: {
        fontSize: 12,
        marginTop: 30,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        color: '#FFF'
    }
})
