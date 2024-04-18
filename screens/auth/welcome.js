import { Canvas, Image, useImage } from "@shopify/react-native-skia";
import {
	Pressable,
	StyleSheet,
	Text,
	View,
	useWindowDimensions,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";

export default function WelcomeScreen() {
	const image = useImage(require("../../assets/splash.png"));
	const SCREEN_WIDTH = useWindowDimensions().width;
	const SCREEN_HEIGHT = useWindowDimensions().height;
	const [fontsLoaded, fontError] = useFonts({
		"Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
	});
	// SplashScreen.preventAutoHideAsync();

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync();
			console.log("Loaded");
		}
	}, [fontsLoaded, fontError]);

	if (!fontsLoaded && !fontError) {
		console.log("failed");
		return null;
	}

	return (
		<View
			onLayout={onLayoutRootView}
			style={[
				styles.container,
				{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT },
			]}>
			<StatusBar style="dark" />
			<Canvas
				style={{
					height: SCREEN_HEIGHT - 550,
					width: SCREEN_WIDTH - 160,
				}}>
				<Image height={220} width={220} fit={"contain"} image={image} />
			</Canvas>
			<Text
				style={{
					fontFamily: "Poppins-Regular",
					fontSize: 25,
					color: "#1B0354",
					lineHeight: 35,
					letterSpacing: -0.3,
				}}>
				Welcome To Transverse
			</Text>
			<Pressable style={styles.signUpButton}>
				<Text
					style={{
						color: "white",
						fontFamily: "Poppins-Regular",

						fontSize: 18,
					}}>
					Signup Now
				</Text>
			</Pressable>
			<Pressable>
				<Text style={{ fontFamily: "Poppins-Regular" }}>
					Already have an account?{" "}
					<Text style={{ color: "#1B0354" }}>Signin</Text>
				</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		gap: 50,
	},
	signUpButton: {
		backgroundColor: "#33059F",
		width: 296,
		height: 59,
		borderRadius: 5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
});
