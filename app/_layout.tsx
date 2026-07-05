import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            // headerTintColor:"white", 
            // headerStyle:{backgroundColor:"gray"},
            // headerTitleStyle: {fontSize:25, fontWeight:"bold", color:"white"},
            headerShown:false
          }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
