import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";

export default function Devolvidos() {
    const formulariosAprovados = [
        { id: '1', nome: 'Formulário 1' },
        { id: '2', nome: 'Formulário 2' },
        { id: '3', nome: 'Formulário 3' },
        { id: '4', nome: 'Formulário 4' },
        { id: '5', nome: 'Formulário 5' },
        { id: '6', nome: 'Formulário 6' },
        { id: '7', nome: 'Formulário 7' },
    ];

    const handleBaixarPDF = (nomeFormulario: string) => {
        alert(`Baixando PDF do ${nomeFormulario}`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.listaContainer}>
                <FlatList
                    data={formulariosAprovados}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <TouchableOpacity>
                                <Text style={styles.formularioText}>{item.nome}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.botaoBaixar}
                                onPress={() => handleBaixarPDF(item.nome)}
                            >
                                <Text style={styles.textoBotao}>Editar Formulario</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#800020',
        padding: 20,
        alignItems: 'center',
    },
    listaContainer: {
        maxHeight: 550,
        width: 280,
        marginTop: 50,
    },
    itemContainer: {
        marginBottom: 15,
        marginEnd: 20,
        backgroundColor: '#000',
        gap: 10,
        padding: 10,
        borderRadius: 8,
    },
    formularioText: {
        fontSize: 16,
        color: '#FFF',
    },
    botaoBaixar: {
        backgroundColor: '#3498db',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    textoBotao: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});