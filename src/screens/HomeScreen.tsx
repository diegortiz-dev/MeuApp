import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = { Home: undefined; Second: { message: string } };
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  const [name, setName] = useState(''); 

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Insira seu nome:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Digite seu nome"
      />
      <Button
        title="Enviar nome para segunda tela"
        onPress={() =>
          navigation.navigate('Second', { message: `Olá, ${name || 'visitante'}!` })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8be8ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    marginTop: 20,
    backgroundColor: '#c90000ff',
    padding: 10,
    borderRadius: 5,
  },
  texto: {
    fontSize: 20,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
