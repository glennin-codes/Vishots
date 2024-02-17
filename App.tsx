import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/Home/";
import VideoDisplayPage from "./src/screens/Video/VideoItem";
import TabNavigator  from './src/components/Bottomtabs'
export default function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
const [isReady, setIsReady] = React.useState(false);


React.useEffect(() => {
  setTimeout(() => {
    setIsReady(true);
  }, 5000);
},
 []);
  if (!isReady) {
    return (
      <HomeScreen/>
    );
  }
  return (
    <NavigationContainer>
        {/* <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />

      
      </Stack.Navigator>  */}
      <TabNavigator />

      <StatusBar style="light" />
    </NavigationContainer>
  );
}
