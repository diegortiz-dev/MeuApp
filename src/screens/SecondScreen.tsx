import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = { Home: undefined; Second: undefined; Third: undefined};
type Props = NativeStackScreenProps<RootStackParamList, 'Second'>;

export default function SecondScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Segunda Tela</Text>
      <Button
        title="Voltar para Terceira Tela"
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
    backgroundColor: '#ff8b8bff',
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
});