import { View, StyleSheet, Image, TextInput, Text, Linking, TouchableOpacity } from "react-native";

export default function Index() {

    const handleEmail = function () {
        const email = 'suporte.ti@grupofacilitti.com.br';
        const subject = 'Problema com o Login';
        const body = '';
        const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        Linking.openURL(url).catch(err => console.error('Erro ao tentar abrir o e-mail', err));
    }

    return (
        <View style={style.container}>
            <Image source={require('@/assets/images/nutrik-logo.png')} style={style.img} />

            <TextInput style={style.input} placeholder="Digite o CPF" />
            <TextInput style={style.input} placeholder="Digite a senha" />
            <TouchableOpacity onPress={handleEmail}>
                <Text style={style.linkText}>
                    Fale com o suporte
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#660000",
        flexDirection: 'column', // Alinha os elementos na vertical
        gap: 15, // Espaço entre os elementos
        height: "100%",
        overflow: "hidden"
    },

    img: {
        width: 300,
        height: 300,
        resizeMode: "contain",
    },

    input: {
        width: '80%', // Ajusta a largura dos TextInput
        height: 40,
        backgroundColor: '#FFF',
        borderRadius: 5,
        marginBottom: 10, // Espaçamento entre os inputs
        paddingLeft: 10, // Adiciona um pequeno padding no texto
    },

    linkText: {
        color: '#1E90FF',
        fontSize: 18,
        textDecorationLine: 'underline',
    },

})
