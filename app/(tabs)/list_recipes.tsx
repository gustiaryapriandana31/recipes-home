import Header from "@/components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLOR } from "../../constants/color";

const RecipesScreen = () => {
    return (
        <LinearGradient
        colors={[COLOR.background, COLOR.backgroundLight]}
        style={{ flex: 1 }}
        >
        <Header title="International Recipes Home" />
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Ini Halaman Recipes</Text>

            <Text style={{ fontSize: 10, color: "brown" }}>List of Recipes</Text>

            <View style={{ flex: 1, alignItems: "center", flexDirection: "row", justifyContent: "space-evenly", width:"100%" }}>
            <Link
                href={"/recipes/1"}
                style={{
                fontSize: 10,
                color: "black",
                marginTop: 20,
                backgroundColor: "gray",
                }}
            >
                <Text>Recipe 1</Text>
            </Link>
            <Link
                href={"/recipes/2"}
                style={{
                fontSize: 10,
                color: "black",
                marginTop: 20,
                backgroundColor: "orange",
                }}
            >
                <Text>Recipe 122</Text>
            </Link>
            <Link
                href={"/recipes/3"}
                style={{
                fontSize: 10,
                color: "black",
                marginTop: 20,
                backgroundColor: "purple",
                }}
            >
                <Text>Recipe 283</Text>
            </Link>
            </View>
        </SafeAreaView>
        </LinearGradient>
    );
};

export default RecipesScreen;
