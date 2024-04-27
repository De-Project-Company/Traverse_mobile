import {
	StyleSheet,
	TextInput,
	View,
	Text,
	Pressable,
	ToastAndroid,
	ActivityIndicator,
} from "react-native";
import { useState, useRef } from "react";
import { API_URL } from "../../constants";

export default function OtpForm({ navigation }) {
	const [otp, setOtp] = useState("");
	const inputs = useRef([]);
	const [isSubmiting, setIsSubmiting] = useState(false);

	const handleInputChange = (text, index) => {
		const newOtp = otp.slice(0, index) + text + otp.slice(index + 1);
		setOtp(newOtp);
		if (index < inputs.current.length - 1) {
			inputs.current[index + 1].focus();
		}
	};
	const onSubmit = async () => {
		setIsSubmiting(true);
		try {
			const response = await fetch(`${API_URL}/api/v1/auth/activate`, {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({ licence: otp }),
			});
			if (response.ok) {
				const { message } = await response.json();
				ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.BOTTOM);
				setIsSubmiting(false);
				navigation.navigate("login");
			}
			if (!response.ok) {
				const { message } = await response.json();
				ToastAndroid.show(message, ToastAndroid.LONG, ToastAndroid.BOTTOM);
				setIsSubmiting(false);
			}
		} catch (error) {
			console.log(error);
			setIsSubmiting(false);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={{ fontFamily: "Poppins-Regular", color: "#6B7B8F" }}>
				Enter Code
			</Text>
			<View style={styles.innerContainer}>
				{Array(6)
					.fill(null)
					.map((_, index) => (
						<TextInput
							key={index}
							ref={(el) => (inputs.current[index] = el)}
							onChangeText={(text) => handleInputChange(text, index)}
							value={otp[index] || ""}
							maxLength={1}
							style={styles.input}
							placeholder="-"
						/>
					))}
			</View>
			<Pressable onPress={onSubmit} style={styles.otpButton}>
				{isSubmiting ? (
					<ActivityIndicator color={"white"} />
				) : (
					<Text style={{ fontFamily: "Poppins-Regular", color: "white" }}>
						Send Otp
					</Text>
				)}
			</Pressable>
			<Text
				style={{
					fontFamily: "Poppins-Regular",
					textAlign: "center",
					color: "#1B0354",
					fontSize: 13,
				}}>
				Can{"'"}t find code? please check your spam folder.
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	innerContainer: {
		flexDirection: "row",
		gap: 10,
	},
	input: {
		height: 46,
		width: 46,
		borderRadius: 6.71,
		borderWidth: 0.84,

		textAlign: "center",
	},
	container: {
		gap: 15,
	},
	otpButton: {
		backgroundColor: "#33059F",

		height: 59,
		borderRadius: 5,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
});
