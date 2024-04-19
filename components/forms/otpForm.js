import { StyleSheet, TextInput, View, Text, Pressable } from "react-native";
import { useState, useRef } from "react";

export default function OtpForm() {
	const [otp, setOtp] = useState("");
	const inputs = useRef([]);

	const handleInputChange = (text, index) => {
		const newOtp = otp.slice(0, index) + text + otp.slice(index + 1);
		setOtp(newOtp);
		if (index < inputs.current.length - 1) {
			inputs.current[index + 1].focus();
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
							keyboardType="numeric"
							maxLength={1}
							style={styles.input}
							placeholder="-"
						/>
					))}
			</View>
			<Pressable style={styles.otpButton}>
				<Text style={{ fontFamily: "Poppins-Regular", color: "white" }}>
					Send Otp
				</Text>
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
