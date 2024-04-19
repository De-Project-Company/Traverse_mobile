import { TextInput, View, StyleSheet, Text, Pressable } from "react-native";

export default function ForgotPasswordForm({ navigation }) {
	return (
		<View style={styles.container}>
			<View>
				<Text style={[styles.label, { fontFamily: "Poppins-Regular" }]}>
					Email Address
				</Text>
				<TextInput
					keyboardType="email-address"
					style={styles.input}
					placeholder="john@doe.com"
				/>
			</View>

			<Pressable
				onPress={() => navigation.navigate("newpass")}
				style={styles.submitBtn}>
				<Text style={{ fontFamily: "Poppins-Regular", color: "#ffffff" }}>
					Continue
				</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		borderWidth: 1,
		padding: 10,
		borderRadius: 5,
		borderColor: "#DAE0E6",
	},
	label: {
		fontSize: 13,
	},
	container: {
		gap: 50,
	},
	submitBtn: {
		backgroundColor: "#33059F",

		height: 59,
		borderRadius: 5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
});
