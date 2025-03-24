import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library'

export default function Aprovados() {
    const formulariosAprovados = [
        { id: '1', nome: 'Formulário 1' },
        { id: '2', nome: 'Formulário 2' },
        { id: '3', nome: 'Formulário 3' },
        { id: '4', nome: 'Formulário 4' },
        { id: '5', nome: 'Formulário 5' },
        { id: '6', nome: 'Formulário 6' },
        { id: '7', nome: 'Formulário 7' },
    ];

    // Função para baixar o PDF
    const baixarPdf = async (nomeFormulario: string) => {
        const url = 'https://api-pdf-production.up.railway.app/pdfs'; // URL do PDF
        const fileUri = `${FileSystem.cacheDirectory}${nomeFormulario}.pdf`; // Caminho temporário

        try {
            // Baixar o arquivo para o cache do app
            const { uri } = await FileSystem.downloadAsync(url, fileUri);

            // Solicitar permissão para acessar a mídia
            const { status } = await MediaLibrary.requestPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Permissão negada', 'É necessário permitir o acesso ao armazenamento para salvar o arquivo.');
                return;
            }

            // Mover o arquivo para a pasta Downloads
            const asset = await MediaLibrary.createAssetAsync(uri);
            await MediaLibrary.createAlbumAsync('Download', asset, false);

            Alert.alert('Sucesso', `PDF do ${nomeFormulario} salvo na pasta Downloads!`);
        } catch (error) {
            console.error(error);
            Alert.alert('Erro', 'Falha ao baixar o PDF');
        }
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
                                onPress={() => baixarPdf(item.nome)}
                            >
                                <Text style={styles.textoBotao}>Baixar PDF</Text>
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
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'center',
        marginTop: 50,
    },
    listaContainer: {
        maxHeight: 350,
        width: 280,
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
