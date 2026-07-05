import { Text, View, Image, StyleSheet, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { COLOR } from '../../constants/color';
import Header from '@/components/Header';
import axios from "axios";
import RecipeItem from "@/components/RecipeItem";

export interface RecipeData {
    id: number;
    name: string;
    cookTimeMinutes: number;
    image: string;
}

const HomeScreen = () => {
    // Random Data Recipes
    const random = Math.floor(Math.random() * 40) + 1;

    const [randomRecipes, setRandomRecipes] = useState<RecipeData[]>([]);
    const [recipes, setRecipes] = useState<Record<string, any>>({});

    const getRecipes = async () => {
        const recipe = await axios.get(`https://dummyjson.com/recipes/${random}`);
        // console.log(recipe.data);
        setRecipes(recipe.data);
    };
    
    const getRandomRecipes = async () => {
        const {data} = await axios.get(`https://dummyjson.com/recipes?limit=10&skip=${random}&select=id,name,image,cookTimeMinutes`);
        
        // console.log(data.recipes);
        setRandomRecipes(data.recipes);
    }

    useEffect(() => {
        getRecipes();
        getRandomRecipes();
    }, []);

    return (
        <LinearGradient colors={[COLOR.background, COLOR.backgroundLight]} style={{ flex: 1 }}>
            <Header title="International Recipes Home" />
            <View style={styles.container}>
                <View style={styles.card}>
                    <Image source={{ uri: recipes.image }} style={styles.imageFull} />
                    <View style={styles.overlay}>
                        <Text style={styles.title}>{recipes.name}</Text>
                        <Text style={styles.cookTimeMinutes}>
                            {recipes.cookTimeMinutes} Minutes
                        </Text>
                    </View>
                </View>
                <Text style={styles.subtitle}>Other Recipes</Text>

                <FlatList
                    data={randomRecipes}
                    contentContainerStyle={{ gap:10, alignItems: 'flex-start' }}
                    style={{marginTop:10}}
                    renderItem={({ item }) => (
                        <RecipeItem
                        id={item.id}
                        name={item.name}
                        cookTimeMinutes={item.cookTimeMinutes}
                        image={item.image}
                    />
                    )}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                />
            </View>
        </LinearGradient>
        // <LinearGradient colors={[COLOR.background, COLOR.backgrondLight]} style={{ flex: 1 }}>
        //     <Header title="International Recipes Home"/>
        //     <SafeAreaView
        //         style={{
        //             flex: 1,
        //             justifyContent: "center",
        //             alignItems: "center",
        //         }}>
        //         <Text>International Recipes Home</Text>
        //         <Link
        //             href={"/recipes"}
        //             style={{ fontSize: 20, color: "green", marginTop: 20 }}
        //         >
        //             <Text>Recipes</Text>
        //         </Link>
        //     </SafeAreaView>
        // </LinearGradient>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container : {
        flex:1
    },
    card : {
        position : 'relative',
        marginBottom: 20,
        borderRadius: 20,
    },
    imageFull : {
        width: '100%',
        height: 320,
        borderRadius: 10,
        elevation: 15,
    },
    overlay:{
        position: 'absolute',
        left: 20,
        bottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: "800",
        color: COLOR.white,
        marginBottom: 4,
        letterSpacing: 1,
        textShadowColor: COLOR.active,
        textShadowOffset: {
            width: 1,
            height: 2
        },
        textShadowRadius: 5
    },
    subtitle: {
        fontSize: 14,
        fontWeight: "600",
        color: COLOR.primary,
        paddingHorizontal: 20,
        letterSpacing: 2,
    },
    cookTimeMinutes : {
        color: COLOR.white,
        textShadowColor: COLOR.inactive,
        textShadowRadius: 3,
        textShadowOffset: {
            width: 2,
            height: 2,
        },
    }
})