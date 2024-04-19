import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ForgotPasswordForm from "../../components/forms/forgotPasswordForm";

export default function ForgotPassword({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Text
				style={{
					color: "#1B0354",
					fontSize: 28.66,
					fontFamily: "Poppins-Regular",
				}}>
				Forgot Your Password?
			</Text>
			<Text
				style={{
					fontFamily: "Poppins-Regular",
					fontSize: 11.94,
					color: "#6B7B8F",
				}}>
				We understand that passwords can slip from memory. No need to stress!
			</Text>
			<ForgotPasswordForm navigation={navigation} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		justifyContent: "center",
		paddingHorizontal: 20,
		gap: 10,
	},
});
