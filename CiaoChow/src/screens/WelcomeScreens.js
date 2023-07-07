import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const { width, height } = Dimensions.get('screen');

const WelcomeScreens = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.iphone11ProX6}>
            <Image style={styles.iphone11ProX6Child} contentFit="cover" source={require("../../assets/ellipse-14.png")} />
            <View style={{ flex: 1, alignItems: 'center' }}>
                <TouchableOpacity style={styles.signUpBtn} onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.getStartedText}>Get Started</Text>
                </TouchableOpacity>
            </View>
            <Image style={[styles.iphone11ProX6Item, styles.iphone11Layout]} contentFit="cover" source={require("../../assets/group-7671.png")} />
            <Image style={[styles.iphone11ProX6Inner, styles.iphone11Layout]} contentFit="cover" source={require("../../assets/group-764.png")} />
            <Text style={[styles.hungryCiaochowHelpsContainer, styles.ciaochowClr]}>
                <Text style={styles.hungry}>{`Hungry? `}</Text>
                <Text style={styles.ciaochow}>CiaoChow</Text>
                <Text style={styles.helps}>{` helps `}</Text>
                <Text style={styles.helps}>{`you find something to eat. `}</Text>
            </Text>
            <Image style={styles.groupIcon} contentFit="cover" source={require("../../assets/group-7701.png")} />
            <View style={styles.vectorParent}>
                <Image style={[styles.vectorIcon, styles.iphone11Layout]} contentFit="cover" source={require("../../assets/vector1.png")} />
                <Text style={[styles.ciaochow1, styles.ciaochowClr]}>CiaoChow</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    signUpBtn: {
        height: 54,
        width: width * 0.95,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Border.br_3xs,
        backgroundColor: Color.white,
        top: height * 0.80
    },
    getStartedText: {
        fontFamily: FontFamily.interSemibold,
        color: Color.primary,
        fontWeight: "600",
        fontSize: FontSize.size_lg,
    },
    iphone11Layout: {
        maxHeight: "100%",
        maxWidth: "100%",
        position: "absolute",
        overflow: "hidden",
    },
    ciaochowClr: {
        color: Color.white,
        textAlign: "center",
        position: "absolute",
    },
    iphone11ProX6Child: {
        width: width,
        height: height * 0.47,
        position: "absolute",
    },
    getStarted: {
        top: 18,
        left: 105,
        lineHeight: 18,
        fontFamily: FontFamily.interSemibold,
        color: Color.primary,
        width: 126,
        textAlign: "center",
        alignItems: "center",
        display: "flex",
        fontWeight: "600",
        fontSize: FontSize.size_lg,
        position: "absolute",
    },
    rectangleParent: {

    },
    iphone11ProX6Item: {
        height: "35.7%",
        width: "38.57%",
        top: "20.2%",
        right: "14.31%",
        bottom: "44.1%",
        left: "47.12%",
    },
    iphone11ProX6Inner: {
        height: "35.14%",
        width: "33.38%",
        top: "20.78%",
        right: "52.83%",
        bottom: "44.09%",
        left: "13.8%",
    },
    hungry: {
        fontFamily: FontFamily.interRegular,
    },
    ciaochow: {
        fontWeight: "700",
        fontFamily: FontFamily.interBold,
    },
    helps: {
        fontWeight: "500",
        fontFamily: FontFamily.interMedium,
    },
    hungryCiaochowHelpsContainer: {
        top: height * 0.65,
        lineHeight: 30,
        color: Color.white,
        fontSize: FontSize.size_lg,
        marginStart: 80,
        marginEnd: 80
    },
    groupIcon: {
        top: height * 0.91,
        left: width * 0.49,
        width: 32,
        height: 8,
        position: "absolute",
    },
    vectorIcon: {
        height: "91.26%",
        width: "14.23%",
        top: "0%",
        right: "0%",
        bottom: "8.74%",
        left: "85.77%",
    },
    ciaochow1: {
        fontSize: 28,
        fontFamily: FontFamily.montserratAlternatesSemibold,
        width: 169,
        height: 34,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        fontWeight: "600",
        color: Color.white,
        left: 0,
        top: 0,
    },
    vectorParent: {
        height: "4.2%",
        width: "52.53%",
        top: "9.98%",
        right: "23.73%",
        bottom: "85.82%",
        left: "23.73%",
        position: "absolute",
    },
    darkModefalseTypedefault: {
        width: 375,
        height: 44,
        position: "absolute",
        overflow: "hidden",
    },
    iphone11ProX6: {
        backgroundColor: Color.primary,
        flex: 1,
        width: "100%",
        height: 812,
        overflow: "hidden",
    },
});

export default WelcomeScreens;