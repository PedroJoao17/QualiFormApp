import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { RadioButton } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';  // Para ícones

const TurnoForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [turno, setTurno] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = (data) => {
    console.log(data);
    setSuccessMessage('Formulário enviado com sucesso!');
  };

  // Função para formatar a hora
  const formatHora = (text) => {
    let formattedText = text.replace(/[^0-9]/g, '');  // Remove tudo que não for número
    if (formattedText.length > 2) {
      formattedText = formattedText.slice(0, 2) + ':' + formattedText.slice(2, 4); // Formata para hh:mm
    }
    return formattedText;
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Escolha o turno</Text>
        <RadioButton.Group onValueChange={setTurno} value={turno}>
          <View style={styles.radioContainer}>
            <RadioButton value="primeiro" />
            <Text style={styles.radioText}>Primeiro Turno</Text>
          </View>
          <View style={styles.radioContainer}>
            <RadioButton value="terceiro" />
            <Text style={styles.radioText}>Terceiro Turno</Text>
          </View>
        </RadioButton.Group>

        <Text style={styles.label}>Hora</Text>
        <Controller
          control={control}
          name="hora"
          rules={{ required: true, pattern: /^[0-9]{2}:[0-9]{2}$/ }}  // Regex para validar formato de hora
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="00:00"
              placeholderTextColor="#bbb"
              keyboardType="numeric"
              maxLength={5}  // Limita a 5 caracteres (hh:mm)
              onChangeText={(text) => onChange(formatHora(text))}  // Aplica a formatação
              value={value}
            />
          )}
        />
        {errors.hora && <Text style={styles.errorText}>Hora inválida. Use o formato 00:00.</Text>}

        <Text style={styles.label}>Temperatura (°C)</Text>
        <Controller
          control={control}
          name="temperatura"
          rules={{ required: true, pattern: /^[0-9]+$/ }}  // Apenas números
          render={({ field: { onChange, value } }) => (
            <View style={styles.tempContainer}>
              <TextInput
                style={styles.tempInput}
                placeholder="Ex: 25"
                placeholderTextColor="#bbb"
                keyboardType="numeric"
                onChangeText={onChange}
                value={value}
              />
              <Ionicons name="snow" size={20} color="#bbb" style={styles.tempIcon} />
            </View>
          )}
        />
        {errors.temperatura && <Text style={styles.errorText}>Temperatura inválida.</Text>}

        <Text style={styles.label}>Ação Corretiva</Text>
        <Controller
          control={control}
          name="acaoCorretiva"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Descreva a ação"
              placeholderTextColor="#bbb"
              onChangeText={onChange}
              value={value}
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
              placeholder="Nome do responsável"
              placeholderTextColor="#bbb"
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <Button title="Enviar" onPress={handleSubmit(onSubmit)} color="#f4a261" />
        {successMessage ? <Text style={styles.successText}>{successMessage}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800000', // Bordô
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  formContainer: {
    backgroundColor: '#333', // Fundo escuro
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
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioText: {
    color: '#fff',
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
  tempContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tempInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#bbb',
    padding: 10,
    marginTop: 4,
    borderRadius: 5,
    color: '#fff',
  },
  tempIcon: {
    marginLeft: 8,
  },
  errorText: {
    color: 'red',
    marginTop: 4,
  },
  successText: {
    color: 'green',
    marginTop: 8,
    textAlign: 'center',
  },
});

export default TurnoForm;
