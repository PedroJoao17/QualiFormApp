import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';

export default function Aprovados() {
    // Dados simulados para os formulários aprovados
    const formulariosAprovados = [
        { id: '1', nome: 'Formulário 1' },
        { id: '2', nome: 'Formulário 2' },
        { id: '3', nome: 'Formulário 3' },
        { id: '4', nome: 'Formulário 4' },
    ];

    const handleBaixarPDF = (nomeFormulario: string) => {
        alert(`Baixando PDF do ${nomeFormulario}`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Formulários Aprovados</Text>

            <FlatList
                data={formulariosAprovados}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <TouchableOpacity>
                            <Text style={styles.formularioText}>{item.nome}</Text>
                        </TouchableOpacity>
                        <Button
                            title="Baixar PDF"
                            onPress={() => handleBaixarPDF(item.nome)}
                        />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    itemContainer: {
        marginBottom: 20,
    },
    formularioText: {
        fontSize: 16,
        marginBottom: 10,
        color: '#333',
    },
});
