import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {Home: undefined;Second: undefined;};
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>AAAAAAAAAAAAAAAA!</Text>
      <Button
        title="Ir para a segunda tela"
        onPress={() => navigation.navigate('Second')}
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
    backgroundColor: '#841584',
    padding: 10,
    borderRadius: 5,
  },
  texto: {
    fontSize: 20,
    marginBottom: 16,
  },
});
