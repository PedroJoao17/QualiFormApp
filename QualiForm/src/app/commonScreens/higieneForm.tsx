import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { RadioButton } from 'react-native-paper';

const HigienizacaoForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = (data) => {
    console.log(data);
    setSuccessMessage('Formulário enviado com sucesso!');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        {/* Formulário de Higienização */}
        <Text style={styles.title}>Formulário de Higienização</Text>

        <Text style={styles.label}>Dia</Text>
        <Controller
          control={control}
          name="data"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Dia/Mês/Ano"
              placeholderTextColor="#bbb"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.label}>Pré Lavagem?</Text>
        <Controller
          control={control}
          name="preLavagem"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Sim ou Não"
              placeholderTextColor="#bbb"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.label}>Concentração Solução (100 PPM Ideal)</Text>
        <Controller
          control={control}
          name="concentracaoSolucao"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Digite a concentração"
              placeholderTextColor="#bbb"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.label}>Ação Corretiva</Text>
        <Controller
          control={control}
          name="acaoCorretiva"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="1. Troca de solução 2. Correção de PPM 3. Não utilizado"
              placeholderTextColor="#bbb"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.label}>Tempo de Imersão (Ideal 15 Minutos)</Text>
        <Controller
          control={control}
          name="tempoImersao"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Tempo de imersão"
              placeholderTextColor="#bbb"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.label}>Realizado Enxágue Final?</Text>
        <Controller
          control={control}
          name="enxagueFinal"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Sim ou Não"
              placeholderTextColor="#bbb"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.label}>Observação</Text>
        <Controller
          control={control}
          name="observacao"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.textArea}
              placeholder="Observação"
              placeholderTextColor="#bbb"
              onChangeText={onChange}
              value={value}
              multiline
            />
          )}
        />

        <Text style={styles.label}>Monitorado por</Text>
        <Controller
          control={control}
          name="monitoradoPor"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.textArea}
              placeholder="Monitorado por"
              placeholderTextColor="#bbb"
              onChangeText={onChange}
              value={value}
              multiline
            />
          )}
        />

        <Text style={styles.label}>Conferido por</Text>
        <Controller
          control={control}
          name="conferidoPor"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Conferido por"
              placeholderTextColor="#bbb"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        {/* Formulário de Cronograma */}
        <Text style={styles.title}>Cronograma e Registro de Higienização</Text>

        <Text style={styles.label}>Setor</Text>
        <Controller
          control={control}
          name="setor"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Setor"
              placeholderTextColor="#bbb"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.label}>Dia da Semana</Text>
        <Controller
          control={control}
          name="diaSemana"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Dia da semana"
              placeholderTextColor="#bbb"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Text style={styles.label}>Itens para Higienização</Text>
        <View style={styles.radioGroup}>
          {[
            'Balança',
            'Bancadas',
            'Cubas',
            'Dispenser',
            'Janela e Tela',
            'Lixeira',
            'Pia',
            'Pia de Mãos',
            'Piso / Ralo',
            'Porta / Parede',
            'Teto',
            'Vidro',
            'Armário Inox',
            'Chão do Corredor',
            'Mesa Inox',
            'Prateleira Inox',
            'Armário',
            'Vaso Sanitário',
            'Coifas',
            'Fogão',
            'Forno Combinado',
            'Ultracongelador',
            'Liquidificador',
            'Masseira',
            'Bebedouro',
            'Cortador de Frios',
            'Multiprocessador',
            'Descascador',
            'Mesa',
            'Pista de Distribuição',
            'Utensílios',
            'Prateleira',
            'Rampa Quante',
          ].map((item, index) => (
            <View key={index} style={styles.radioContainer}>
              <RadioButton value="ok" />
              <Text style={styles.radioText}>{item}</Text>
            </View>
          ))}
        </View>

        <Button title="Enviar" onPress={handleSubmit(onSubmit)} color="#f4a261" />
        {successMessage ? <Text style={styles.successText}>{successMessage}</Text> : null}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800000',
    padding: 16,
  },
  formContainer: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    maxWidth: 400,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  label: {
    color: '#fff',
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    padding: 10,
    marginTop: 4,
    borderRadius: 5,
    color: '#fff',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#bbb',
    padding: 10,
    marginTop: 4,
    borderRadius: 5,
    color: '#fff',
    height: 80,
    textAlignVertical: 'top',
  },
  radioGroup: {
    marginTop: 16,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioText: {
    color: '#fff',
  },
  successText: {
    color: 'green',
    marginTop: 8,
    textAlign: 'center',
  },
});

export default HigienizacaoForm;
