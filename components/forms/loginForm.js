import { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Pressable,
	ActivityIndicator,
	ToastAndroid,
} from "react-native";
import { API_URL } from "../../constants/index";
export default function LoginForm({ navigation }) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isSubmiting, setIsSubmiting] = useState(false);
	const handleSubmit = async () => {
		setIsSubmiting(true);
		try {
			const response = await fetch(`${API_URL}/api/v1/auth/signin`, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({
					password,
					email,
				}),
			});
			if (response.ok) {
				const { message } = await response.json();
				console.log(message);

				navigation.navigate("home");
				setEmail("");
				setPassword("");
				setIsSubmiting(false);
			}
			if (!response.ok) {
				const { message } = await response.json();
				ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.BOTTOM);
				console.log(message);
				setIsSubmiting(false);
			}
		} catch (error) {
			console.log(error);
			setIsSubmiting(false);
		}
	};
	return (
		<View style={styles.container}>
			<View>
				<Text style={[styles.label, { fontFamily: "Poppins-Regular" }]}>
					Email Address
				</Text>
				<TextInput
					value={email}
					onChangeText={(val) => setEmail(val)}
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
					value={password}
					onChangeText={(val) => setPassword(val)}
					secureTextEntry
					style={styles.input}
					placeholder="***********"
				/>
			</View>

			<Pressable onPress={handleSubmit} style={styles.signIn}>
				{isSubmiting ? (
					<ActivityIndicator color={"white"} />
				) : (
					<Text style={{ color: "white", fontFamily: "Poppins-Regular" }}>
						SignIn
					</Text>
				)}
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
