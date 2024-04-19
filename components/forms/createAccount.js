import { useFonts } from "expo-font";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";

export default function CreateAccount({ navigation }) {
	const handleSubmit = async () => {
		// Submit Logic
		navigation.navigate("verify");
	};

	return (
		<View style={styles.container}>
			<Text style={[styles.label, { fontFamily: "Poppins-Regular" }]}>
				Name
			</Text>
			<TextInput style={styles.input} placeholder="john doe" />
			<Text style={[styles.label, { fontFamily: "Poppins-Regular" }]}>
				Email
			</Text>
			<TextInput
				keyboardType="email-address"
				style={styles.input}
				placeholder="john@doe.com"
			/>
			<Text style={[styles.label, { fontFamily: "Poppins-Regular" }]}>
				Company Name {"(optional)"}
			</Text>
			<TextInput style={styles.input} placeholder="ABC company" />
			<Text style={[styles.label, { fontFamily: "Poppins-Regular" }]}>
				Website {"(optional)"}
			</Text>
			<TextInput style={styles.input} placeholder="abc.com" />
			<Text style={[styles.label, { fontFamily: "Poppins-Regular" }]}>
				Password
			</Text>
			<TextInput
				secureTextEntry
				style={styles.input}
				placeholder="***********"
			/>
			<Text style={[styles.label, { fontFamily: "Poppins-Regular" }]}>
				Confirm Password
			</Text>
			<TextInput
				secureTextEntry
				style={styles.input}
				placeholder="***********"
			/>
			<Pressable onPress={handleSubmit} style={styles.signUpButton}>
				<Text style={{ color: "white", fontFamily: "Poppins-Regular" }}>
					Signup
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
		flexDirection: "column",
		gap: 15,
		paddingBottom: 60,
		flex: 1,
	},
	signUpButton: {
		backgroundColor: "#33059F",

		height: 59,
		borderRadius: 5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
});
