import { Montserrat_400Regular, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import { SafeAreaView, StatusBar } from 'react-native';


import mockTextoCesta from './src/mocks/cesta';
import Cesta from './src/telas/Cesta';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fonteCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mockTextoCesta} />
    </SafeAreaView>
  );
}

