import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Linking } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

export default function GerenciadorArquivos() {
  const nomeArquivo = 'olaMundo.pdf';
  const urlArquivo = 'https://1f01-189-2-84-114.ngrok-free.app/files/olaMundo.pdf';
  const caminhoArquivo = FileSystem.documentDirectory + nomeArquivo;

  // Função para baixar e compartilhar o arquivo PDF
  const baixarECompartilharArquivo = async () => {
    try {
      console.log(`Iniciando o download do arquivo de: ${urlArquivo} para ${caminhoArquivo}`);
      
      // Baixando o arquivo
      const { uri } = await FileSystem.downloadAsync(urlArquivo, caminhoArquivo);
      console.log(`Arquivo baixado com sucesso para: ${uri}`);
      
      // Verificando se o arquivo foi baixado com sucesso
      const arquivoExiste = await FileSystem.getInfoAsync(caminhoArquivo);
      if (!arquivoExiste.exists) {
        Alert.alert('Erro', 'Arquivo não encontrado.');
        return;
      }
  
      // Verificando se o compartilhamento está disponível
      if (!(await Sharing.isAvailableAsync())) {
        Alert.alert('Erro', 'A funcionalidade de compartilhamento não está disponível neste dispositivo.');
        return;
      }
  
      // Compartilhando o arquivo
      await Sharing.shareAsync(caminhoArquivo);
      Alert.alert('Sucesso', 'Arquivo baixado e compartilhado com sucesso.');
    } catch (erro) {
      console.error('Erro ao baixar ou compartilhar o arquivo:', erro);
      Alert.alert('Erro', 'Falha ao baixar ou compartilhar o arquivo.');
    }
  };
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.botao} onPress={baixarECompartilharArquivo}>
        <Text style={styles.textoBotao}>Baixar Arquivo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#3498db',
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
  },
});
