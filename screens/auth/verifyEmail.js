import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OtpForm from "../../components/forms/otpForm";

export default function VerifyEmail() {
	return (
		<SafeAreaView style={styles.container}>
			<Text
				style={{
					fontFamily: "Poppins-Regular",
					fontSize: 32,
					color: "#1B0354",
				}}>
				One final step! we need to verify your email
			</Text>
			<Text
				style={{
					fontFamily: "Poppins-Regular",
					fontSize: 12,
					color: "#6B7B8F",
				}}>
				Begin your first step in productivity
			</Text>
			<OtpForm />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
		justifyContent: "center",

		flex: 1,
	},
});
