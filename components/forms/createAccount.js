import { useFonts } from "expo-font";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Pressable,
	ToastAndroid,
	ActivityIndicator,
} from "react-native";
import { API_URL } from "../../constants";
import { useState } from "react";

export default function CreateAccount({ navigation }) {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [website, setWebsite] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [stack, setStatck] = useState("");
	const [isSubmiting, setIsSubmiting] = useState(false);
	const handleSubmit = async () => {
		// Submit Logic
		if (!(username && email && password && confirmPassword && stack)) {
			ToastAndroid.show(
				"Please Fill out all Fields!",
				ToastAndroid.BOTTOM,
				ToastAndroid.LONG
			);
		} else {
			if (password !== confirmPassword) {
				ToastAndroid.show(
					"Password Does not match!",
					ToastAndroid.BOTTOM,
					ToastAndroid.LONG
				);
			} else {
				fullfillRequest();
			}
		}
	};
	const fullfillRequest = async () => {
		setIsSubmiting(true);
		try {
			const response = await fetch(`${API_URL}/api/v1/auth/signup`, {
				headers: {
					"Content-type": "application/json",
				},
				method: "POST",
				body: JSON.stringify({
					name: username,
					password,
					confirmPassword,
					email,
					website,
					companyName,
					stack,
				}),
			});
			if (response.ok) {
				const { message } = await response.json();
				ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.BOTTOM);
				navigation.navigate("verify");
				setIsSubmiting(false);
			}
			if (!response.ok) {
				const { message } = await response.json();
				ToastAndroid.show(message, ToastAndroid.BOTTOM, ToastAndroid.LONG);
				setIsSubmiting(false);
			}
		} catch (error) {
			setIsSubmiting(false);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={[styles.label, { fontFamily: "Poppins-Regular" }]}>
				Name
			</Text>
			<TextInput
				value={username}
				onChangeText={(val) => setUsername(val)}
				style={styles.input}
				placeholder="john doe"
			/>
			<Text style={[styles.label, { fontFamily: "Poppins-Regular" }]}>
				Email
			</Text>
			<TextInput
				value={email}
				onChangeText={(val) => setEmail(val)}
				keyboardType="email-address"
				style={styles.input}
				placeholder="john@doe.com"
			/>
			<Text style={[styles.label, { fontFamily: "Poppins-Regular" }]}>
				Company Name {"(optional)"}
			</Text>
			<TextInput
				value={companyName}
				onChangeText={(val) => setCompanyName(val)}
				style={styles.input}
				placeholder="ABC company"
			/>
			<Text style={[styles.label, { fontFamily: "Poppins-Regular" }]}>
				Website {"(optional)"}
			</Text>
			<TextInput
				value={website}
				onChangeText={(val) => setWebsite(val)}
				style={styles.input}
				placeholder="abc.com"
			/>
			<Text style={[styles.label, { fontFamily: "Poppins-Regular" }]}>
				Stack
			</Text>
			<TextInput
				value={stack}
				onChangeText={(val) => setStatck(val)}
				style={styles.input}
				placeholder="Frontend etc"
			/>
			<Text style={[styles.label, { fontFamily: "Poppins-Regular" }]}>
				Password
			</Text>
			<TextInput
				value={password}
				onChangeText={(val) => setPassword(val)}
				secureTextEntry
				style={styles.input}
				placeholder="***********"
			/>
			<Text style={[styles.label, { fontFamily: "Poppins-Regular" }]}>
				Confirm Password
			</Text>
			<TextInput
				value={confirmPassword}
				onChangeText={(val) => setConfirmPassword(val)}
				secureTextEntry
				style={styles.input}
				placeholder="***********"
			/>
			<Pressable onPress={handleSubmit} style={styles.signUpButton}>
				{isSubmiting ? (
					<ActivityIndicator color={"white"} />
				) : (
					<Text style={{ color: "white", fontFamily: "Poppins-Regular" }}>
						Signup
					</Text>
				)}
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
