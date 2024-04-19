import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
export default function LoginForm({ navigation }) {
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
			<View>
				<Text style={[styles.label, { fontFamily: "Poppins-Regular" }]}>
					Password
				</Text>
				<TextInput
					secureTextEntry
					style={styles.input}
					placeholder="***********"
				/>
			</View>

			<Pressable style={styles.signIn}>
				<Text style={{ color: "white", fontFamily: "Poppins-Regular" }}>
					SignIn
				</Text>
			</Pressable>
			<Pressable onPress={() => navigation.navigate("forgot")}>
				<Text style={{ fontFamily: "Poppins-Regular", color: "#1B0354" }}>
					Did Something happen?{" "}
					<Text style={{ color: "#352DC8" }}>Forgot Password</Text>
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
	signIn: {
		backgroundColor: "#33059F",

		height: 59,
		borderRadius: 5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	container: {
		gap: 20,
	},
});
