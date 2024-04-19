import { TextInput, View, StyleSheet, Text, Pressable } from "react-native";

export default function CreateNewPasswordForm({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={{ gap: 15 }}>
				<View>
					<Text style={[styles.label, { fontFamily: "Poppins-Regular" }]}>
						New Password
					</Text>
					<TextInput
						secureTextEntry
						style={styles.input}
						placeholder="new password"
					/>
				</View>

				<View>
					<Text style={[styles.label, { fontFamily: "Poppins-Regular" }]}>
						Confirm New Password
					</Text>
					<TextInput
						secureTextEntry
						style={styles.input}
						placeholder="confirm new password"
					/>
				</View>
			</View>

			<Pressable style={styles.submitBtn}>
				<Text style={{ fontFamily: "Poppins-Regular", color: "#ffffff" }}>
					Reset Password
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
