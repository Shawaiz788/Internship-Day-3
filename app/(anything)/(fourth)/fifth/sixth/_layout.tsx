import { useColorScheme } from '@/hooks/use-color-scheme';
import { Slot } from 'expo-router';
import 'react-native-reanimated';



export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
<Slot></Slot>    
  );
}
