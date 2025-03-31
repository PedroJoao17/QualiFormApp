import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import Checkbox from "expo-checkbox";

export default function FillForm() {
    const [turno, setTurno] = useState('');
    const [temperatura, setTemperatura] = useState("");
    const [acaoCorretiva, setAcaoCorretiva] = useState("");
    const [data, setData] = useState("");
    const [usuario, setUsuario] = useState("Maria Eduarda"); // Exemplo de usuário

    useEffect(() => {
        const now = new Date();
        const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
        setData(formattedDate);
    }, []);

    // Função para enviar os dados para o backend
    const handleSubmit = async () => {
        const formData = {
            turno,
            temperatura,
            acaoCorretiva,
            data,
            usuario,
        };

        try {
            const response = await fetch('YOUR_BACKEND_URL_HERE', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                console.log('Dados enviados com sucesso:', jsonResponse);
                // Aqui você pode adicionar um alerta ou navegação para outra tela
            } else {
                console.error('Erro ao enviar os dados:', response.status);
            }
        } catch (error) {
            console.error('Erro de rede:', error);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.label}>Turno</Text>
                <View style={styles.checkboxContainer}>
                    <View style={styles.checkboxItem}>
                        <Checkbox value={turno === "1"} onValueChange={() => setTurno("1")} />
                        <Text style={styles.checkboxLabel}>1° Turno</Text>
                    </View>
                    <View style={styles.checkboxItem}>
                        <Checkbox value={turno === "3"} onValueChange={() => setTurno("3")} />
                        <Text style={styles.checkboxLabel}>3° Turno</Text>
                    </View>
                </View>

                <Text style={styles.label}>Temperatura (°C)</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={temperatura}
                        onChangeText={setTemperatura}
                        placeholder="Digite a temperatura"
                        placeholderTextColor="#000"
                    />
                    <Text style={styles.unit}>°C</Text>
                </View>

                <Text style={styles.label}>Ação Corretiva</Text>
                <TextInput
                    style={[styles.input, styles.textArea]}
                    multiline
                    value={acaoCorretiva}
                    onChangeText={setAcaoCorretiva}
                    placeholder="Descreva a ação corretiva"
                    placeholderTextColor="#000"
                />

                <Text style={styles.infoText}>Data: {data}</Text>
                <Text style={styles.infoText}>Usuário: {usuario}</Text>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#800020'
    },
    container: {
        width: "90%",
        backgroundColor: "#2F2F2F",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        alignItems: "center",
        gap: 15,
    },
    label: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
    },
    checkboxContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
    },
    checkboxItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    checkboxLabel: {
        color: "#fff",
        marginLeft: 5,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ddd",
        borderRadius: 5,
        padding: 10,
        width: "100%",
    },
    input: {
        flex: 1,
        color: "#000",
    },
    unit: {
        color: "#000",
        marginLeft: 5,
    },
    textArea: {
        height: 80,
        textAlignVertical: "top",
        width: "100%",
        backgroundColor: '#ddd',
        borderRadius: 5,
    },
    infoText: {
        color: "#ddd",
        fontSize: 14,
    },
    button: {
        backgroundColor: "#d32f2f",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});
