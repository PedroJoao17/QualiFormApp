import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { router } from "expo-router";

export default function Enviar() {
    return (
        <View style={style.container}>
            <View style={style.containerHeader}>
                {/* Botão com Imagem à esquerda */}
                <TouchableOpacity>
                    <Image source={require("../../../assets/images/arrow-circle.png")} style={style.image} />
                </TouchableOpacity>

                {/* Título à direita */}
                <Text style={style.header}>Enviar Formulários</Text>
            </View>

            {/* ScrollView para os botões */}
            <ScrollView style={style.scrollContainer} contentContainerStyle={style.scrollContent}>
                <TouchableOpacity style={style.button} onPress={() => router.push("/commonScreens/higieneForm")}>
                    <Text style={style.text}>CONTROLE DE TEMPERATURA DE EQUIPAMENTOS - CLIMATIZADOS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button}>
                    <Text style={style.text}>CRONOGRAMA E REGISTRO DE HIGIENIZAÇÃO - INSTALAÇÕES, EQUIPAMENTOS,
                        MÓVEIS E UTENSÍLIOS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button}>
                    <Text style={style.text}>PCC 03-CONTROLE DE HIGIENIZAÇÃO DE HORTIFRUTIS
                        MONITORAMENTO DE CONCENTRAÇÃO DE SANITIZANTE (PERIGO QUÍMICO)</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button} onPress={() => router.push("/commonScreens/amostras")}>
                    <Text style={style.text}>ANALISE DE AMOSTRAS</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#660000",
        paddingTop: 20, // Ajuste para espaçamento superior
    },

    containerHeader: {
        flexDirection: "row", // Alinha os elementos na horizontal
        justifyContent: "space-between", // Espaço entre o botão e o título
        alignItems: "center", // Alinha o botão e o título verticalmente
        paddingHorizontal: 20,
        marginBottom: 50,
    },

    header: {
        color: "#FFF",
        fontSize: 28,
        fontWeight: "bold",
        marginLeft: 10, // Ajusta o espaçamento entre o título e a imagem
    },

    scrollContainer: {
        flex: 1, // Garante que o ScrollView ocupe o espaço disponível
        width: "100%",
        maxHeight: 400,
        paddingHorizontal: 20,
        marginTop: 100,
    },

    scrollContent: {
        alignItems: "center",
    },

    button: {
        backgroundColor: "#333",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        marginBottom: 10, // Espaçamento entre os botões
    },

    text: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },

    image: {
        width: 50, // Ajuste o tamanho da imagem
        height: 50,
        resizeMode: "contain",
    },

});
