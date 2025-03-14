import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { router } from "expo-router";

export default function Index() {


    return (
        <View style={style.container}>

            <Text style={style.header}>Menu</Text>

            <TouchableOpacity style={style.button} onPress={() => router.push("/commonScreens/enviarForm")}>
                <Text style={style.text}>Enviar Formulários</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.button} onPress={() => router.push("/commonScreens/fillForm")}>
                <Text style={style.text}>Validar Formulários</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.button} onPress={() => router.push("/commonScreens/aprovForm")}>
                <Text style={style.text}>Formulários Aprovados</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.button} onPress={() => router.push("/commonScreens/devForm")}>
                <Text style={style.text}>Formulários Devolvidos</Text>
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
        gap: 15,
        height: "100%",
    },
    button: {
        backgroundColor: "#333",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        width: 300,
    },
    header: {
        position: "absolute",
        top: 20,
        right: 30,
        color: "#FFF",
        fontSize: 32,
        fontWeight: "bold",
    },
    text: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
});
