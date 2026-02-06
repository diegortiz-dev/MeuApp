import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = { Home: undefined; Second: {name: string, message: string }; Third: undefined};
type Props = NativeStackScreenProps<RootStackParamList, 'Second'>;

export default function SecondScreen({ navigation, route }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Segunda Tela</Text>
      <Text style={styles.message}>{route.params.message}</Text>
      <Button
        title="Ir para Terceira Tela"
        onPress={() => navigation.navigate('Third')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b6ffefff',
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
  },
  botao: {
    marginTop: 20,
    backgroundColor: '#841515ff',
  },
});