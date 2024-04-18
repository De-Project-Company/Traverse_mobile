import { View } from "react-native";

export default function Card({
	backgroundColor,
	width,
	padding,
	borderRadius,
	height,
	children,
}) {
	return (
		<View
			style={{
				backgroundColor,
				width,
				padding,
				borderRadius,
				elevation: 10,
				height,
			}}>
			{children}
		</View>
	);
}

// card: {
// 		backgroundColor: "white",
// 		width: "100%",
// 		padding: 30,
// 		borderRadius: 5,
// 		elevation: 10,
// 		height: "49%",
// 	},
