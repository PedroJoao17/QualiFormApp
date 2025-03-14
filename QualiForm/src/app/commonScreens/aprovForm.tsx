import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";

export default function Aprovado() {
    return (
        <View style={style.container}>
            <View style={style.containerHeader}>
                {/* Botão com Imagem à esquerda */}
                <TouchableOpacity>
                    <Image source={require("../../../assets/images/arrow-circle.png")} style={style.image} />
                </TouchableOpacity>

                {/* Título à direita */}
                <Text style={style.header}>Formulários Aprovados</Text>
            </View>

            {/* ScrollView para os botões */}
            <ScrollView style={style.scrollContainer} contentContainerStyle={style.scrollContent}>

                <View style={style.sectionButton}>
                    <Text style={style.text}>
                        Formulario Nome
                    </Text>
                    <Text style={style.text}>
                        Enviado em 10/11/2000
                    </Text>
                    <TouchableOpacity style={style.buttonBordo}>
                        <Text style={style.text}>PDF</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.sectionButton}>
                    <Text style={style.text}>
                        Formulario Nome
                    </Text>
                    <Text style={style.text}>
                        Enviado em 10/11/2000
                    </Text>
                    <TouchableOpacity style={style.buttonBordo}>
                        <Text style={style.text}>PDF</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.sectionButton}>
                    <Text style={style.text}>
                        Formulario Nome
                    </Text>
                    <Text style={style.text}>
                        Enviado em 10/11/2000
                    </Text>
                    <TouchableOpacity style={style.buttonBordo}>
                        <Text style={style.text}>PDF</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.sectionButton}>
                    <Text style={style.text}>
                        Formulario Nome
                    </Text>
                    <Text style={style.text}>
                        Enviado em 10/11/2000
                    </Text>
                    <TouchableOpacity style={style.buttonBordo}>
                        <Text style={style.text}>PDF</Text>
                    </TouchableOpacity>
                </View>

                <View style={style.sectionButton}>
                    <Text style={style.text}>
                        Formulario Nome
                    </Text>
                    <Text style={style.text}>
                        Enviado em 10/11/2000
                    </Text>
                    <TouchableOpacity style={style.buttonBordo}>
                        <Text style={style.text}>PDF</Text>
                    </TouchableOpacity>
                </View>
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

    sectionButton: {
        backgroundColor: "#333",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: "start",
        justifyContent: "center",
        width: 300,
        marginBottom: 10,
        gap: 10,
    },

    buttonBordo: {
        backgroundColor: "#800000",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        marginBottom: 1, // Espaçamento entre os botões
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
