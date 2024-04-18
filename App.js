import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "./navigators/stackNavigator";
import { View, Text } from "react-native";
export default function App() {
	return (
		<NavigationContainer>
			<RootStackNavigator />
		</NavigationContainer>
	);
}
