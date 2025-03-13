import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function Index() {
    return (
        <View style={style.container}>
            <TouchableOpacity style={style.button}>
                <Text style={style.buttonText}>Enviar Formulários</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.button}>
                <Text style={style.buttonText}>Formulários Aprovados</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.button}>
                <Text style={style.buttonText}>Formulários Devolvidos</Text>
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
        flexDirection: 'column', // Alinha os elementos na vertical
        gap: 15, // Espaço entre os elementos
        height: "100%",
        overflow: "hidden"
    },
    button: {
        backgroundColor: "#333", // Cor escura de fundo para o botão
        paddingVertical: 12, // Espaçamento vertical para o botão
        paddingHorizontal: 20, // Espaçamento horizontal para o botão
        borderRadius: 5, // Bordas arredondadas
        alignItems: "center", // Centraliza o texto dentro do botão
        justifyContent: "center",
    },
    buttonText: {
        color: "#FFF", // Cor clara para o texto
        fontSize: 18,
        fontWeight: "bold",
    }
});
