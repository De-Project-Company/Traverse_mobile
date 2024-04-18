import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/auth/welcome";
import Onboarding from "../screens/onboarding/onboarding";

const Stack = createNativeStackNavigator();

export default function RootStackNavigator() {
	return (
		<Stack.Navigator initialRouteName="onboarding">
			<Stack.Screen
				options={{
					headerShown: false,
				}}
				name="onboarding"
				component={Onboarding}
			/>
			<Stack.Screen
				options={{
					headerShown: false,
				}}
				name="welcome"
				component={WelcomeScreen}
			/>
		</Stack.Navigator>
	);
}
