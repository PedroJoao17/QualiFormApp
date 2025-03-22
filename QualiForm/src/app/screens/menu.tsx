import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Menu() {
    const { cpf } = useLocalSearchParams();
    const router = useRouter();
    const [showField] = useState(cpf === '456');

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchBtn} onPress={() => router.push("/screens/enviar")}>
                <Text style={styles.textBtn}>Enviar Formulário</Text>
            </TouchableOpacity>

            {showField && (
                <TouchableOpacity style={styles.touchBtn} onPress={() => router.push("/screens/validate")}>
                    <Text style={styles.textBtn}>Validar Formulário</Text>
                </TouchableOpacity>
            )}

            <TouchableOpacity style={styles.touchBtn} onPress={() => router.push("/screens/aprove")}>
                <Text style={styles.textBtn}>Formulários Aprovados</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchBtn} onPress={() => router.push("/screens/dev")}>
                <Text style={styles.textBtn}>Formulários Devolvidos</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#800020",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
    },
    touchBtn: {
        backgroundColor: "#1c1c1c",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        alignItems: "center",
        width: 250,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3, // Sombra para Android
    },
    textBtn: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFF",
    },
});
