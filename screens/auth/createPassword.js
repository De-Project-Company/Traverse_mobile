import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ForgotPasswordForm from "../../components/forms/forgotPasswordForm";
import CreateNewPasswordForm from "../../components/forms/createNewPassword";

export default function CreateNewPassword({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Text
				style={{
					color: "#1B0354",
					fontSize: 28.66,
					fontFamily: "Poppins-Regular",
				}}>
				Create New Password?
			</Text>
			<Text
				style={{
					fontFamily: "Poppins-Regular",
					fontSize: 11.94,
					color: "#6B7B8F",
				}}>
				Forge your digital fortress with a password as strong as your ambitions.{" "}
			</Text>
			<CreateNewPasswordForm navigation />
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
