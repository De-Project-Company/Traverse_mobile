import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "../screens/onboarding/onboarding";
import WelcomeScreen from "../screens/onboarding/welcome";
import SignUp from "../screens/auth/signup";
import VerifyEmail from "../screens/auth/verifyEmail";
import Login from "../screens/auth/login";
import ForgotPassword from "../screens/auth/forgotPassword";
import CreateNewPassword from "../screens/auth/createPassword";

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
			<Stack.Screen
				options={{
					headerShown: false,
				}}
				name="signup"
				component={SignUp}
			/>
			<Stack.Screen
				options={{
					headerShown: false,
				}}
				name="login"
				component={Login}
			/>
			<Stack.Screen
				options={{
					headerShown: true,
					headerTitle: "",
					headerShadowVisible: false,
				}}
				name="forgot"
				component={ForgotPassword}
			/>
			<Stack.Screen
				options={{
					headerShown: true,
					headerTitle: "",
					headerShadowVisible: false,
				}}
				name="newpass"
				component={CreateNewPassword}
			/>
			<Stack.Screen
				options={{
					headerShown: false,
				}}
				name="verify"
				component={VerifyEmail}
			/>
		</Stack.Navigator>
	);
}
