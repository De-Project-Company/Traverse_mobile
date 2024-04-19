import { useFonts } from "expo-font";
import { useCallback } from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	useWindowDimensions,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import CreateAccount from "../../components/forms/createAccount";
import { SafeAreaView } from "react-native-safe-area-context";
export default function SignUp({ navigation }) {
	const SCREEN_HEIGHT = useWindowDimensions().height;
	const [fontsLoaded, fontError] = useFonts({
		"Poppins-Regular": "../../assets/fonts/Poppins-Regulat.ttf",
	});
	const onRootLayout = useCallback(async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync();
		}
		if (!fontsLoaded && !fontError) {
			return null;
		}
	}, [fontsLoaded, fontError]);
	return (
		<SafeAreaView onLayout={onRootLayout} style={styles.container}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={styles.innerContainer}>
				<Text
					style={{
						textAlign: "center",
						fontSize: 33,
						fontFamily: "Poppins-Regular",
						color: "#1B0354",
					}}>
					Create An Account
				</Text>
				<Text
					style={{
						textAlign: "center",
						fontSize: 14,
						fontFamily: "Poppins-Regular",
						color: "#6B7B8F",
					}}>
					Lorem ipsum dolor sit amet consectetur. Turpis dictumst tempor lacus
					in quam.
				</Text>

				{/* form */}
				<CreateAccount navigation={navigation} />
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	innerContainer: {
		paddingVertical: 30,
		paddingHorizontal: 20,
		flex: 1,
		paddingBottom: 10,
	},
});
