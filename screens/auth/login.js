import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginForm from "../../components/forms/loginForm";

export default function Login({ navigation }) {
	return (
		<SafeAreaView style={styles.container}>
			<Text
				style={{
					fontFamily: "Poppins-Regular",
					fontSize: 32,
					color: "#1B0354",
				}}>
				Login Into Account
			</Text>
			<Text
				style={{
					fontFamily: "Poppins-Regular",
					color: "#6B7B8F",
					fontSize: 13,
				}}>
				Welcome back to Traverse, where every moment matters
			</Text>
			<LoginForm navigation={navigation} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		flex: 1,
		paddingHorizontal: 15,
	},
});
