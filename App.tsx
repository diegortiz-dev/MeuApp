import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import SecondScreen from './src/screens/SecondScreen';
import ThirdScreen from './src/screens/ThirdScreen';

// ADICIONAR este tipo (define as rotas do app):
type RootStackParamList = {
  Home: undefined;
  Second: { name: string; message: string };
  Third: undefined;
};

// ADICIONAR esta linha:
const Stack = createNativeStackNavigator<RootStackParamList>();

// MANTER a função App, mas SUBSTITUIR o conteúdo do return:
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} />
        <Stack.Screen name="Second" component={SecondScreen} options={{ title: 'Segunda' }} />
        <Stack.Screen name="Third" component={ThirdScreen} options={{ title: 'Terceira' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}