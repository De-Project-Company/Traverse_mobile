import { StatusBar } from "expo-status-bar";
import {
	FlatList,
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
	useWindowDimensions,
} from "react-native";
import Card from "../../components/card";
import { useFonts } from "expo-font";
import { useCallback, useRef, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { FontAwesome } from "@expo/vector-icons";
export default function Onboarding({ navigation }) {
	const SCREEN_WIDTH = useWindowDimensions().width;
	const SData = [
		{
			id: 1,
			url: require("../../assets/pc1.png"),
			title: "Welcome to Transverse",
			description:
				"Transverse is an app that lets you track your Projects in real time alongside other team members and clients.",
		},
		{
			id: 2,
			url: require("../../assets/pc2.png"),
			title: "Create A Task",
			description:
				"Manage your projects, update clients live as you progress in your tasks, create new tasks, and observe old tasks.",
		},
		{
			id: 3,
			url: require("../../assets/pc2.png"),
			title: "Start A Fight",
			description:
				"Manage your projects, update clients live as you progress in your tasks, create new tasks, and observe old tasks.",
		},
	];

	const [swiperData, setSwiperData] = useState(SData);
	// Flatlist ref

	const flatlistRef = useRef();
	const handleMoveToNext = (item) => {
		flatlistRef.current.scrollToIndex({ animated: true, index: item.id });
	};

	SplashScreen.preventAutoHideAsync();
	const [fontsLoaded, fontError] = useFonts({
		"Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
	});
	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync();
		}
	}, [fontError, fontsLoaded]);
	if (!fontsLoaded && !fontError) {
		return null;
	}
	return (
		<View onLayout={onLayoutRootView} style={styles.container}>
			<StatusBar style="light" />
			<FlatList
				removeClippedSubviews
				horizontal
				ref={flatlistRef}
				pagingEnabled
				data={swiperData}
				renderItem={({ item }) => (
					<View
						style={{
							backgroundColor: item.bgColor,
							width: SCREEN_WIDTH,
							paddingVertical: 40,
							paddingHorizontal: 15,
						}}
						key={item.id}>
						<Pressable
							onPress={() => navigation.navigate("welcome")}
							style={{ paddingHorizontal: 25 }}>
							<Text
								style={{
									color: "white",
									textAlign: "right",
									fontSize: 16,
									fontFamily: "Poppins-Regular",
								}}>
								Skip
							</Text>
						</Pressable>
						<Image source={item.url} />
						{/* Card */}
						<Card
							backgroundColor="white"
							width="100%"
							padding={30}
							borderRadius={15}
							elevation={10}
							height="49%">
							<Text style={{ fontSize: 25, fontFamily: "Poppins-Regular" }}>
								{item.title}
							</Text>
							<Text style={{ fontSize: 14, fontFamily: "Poppins-Regular" }}>
								{item.description}
							</Text>
							<View>
								<Pressable
									onPress={() => handleMoveToNext(item)}
									style={styles.arrowbtn}>
									<FontAwesome size={18} color={"white"} name="arrow-right" />
								</Pressable>
							</View>
						</Card>
					</View>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1B0354",
	},
	arrowbtn: {
		backgroundColor: "#33059F",
		height: 32,
		width: 32,
		borderRadius: 32,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
});
