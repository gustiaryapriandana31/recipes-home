import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { COLOR } from '../../constants/color';
import Header from '@/components/Header';
import axios from 'axios';
import {Ionicons} from '@expo/vector-icons'

const DetailRecipe = () => {

    const { id_recipe } = useLocalSearchParams();
    const [recipe, setRecipe] = useState<Record<string,any>>({});

    const getRecipe = async () => {
        const {data} = await axios.get(`https://dummyjson.com/recipe/${id_recipe}`)

        setRecipe(data);
    }

    useEffect(()=>{
        getRecipe();
    }, [])


    return (
        <LinearGradient colors={[COLOR.background, COLOR.backgroundLight]} style={{ flex: 1 }}>
            <Header backButton={true} title="Nusantara Recipes Home" />
            <ScrollView>
                {/* Image */}
                <View style={styles.container}>
                    <View style={styles.card}>
                        <Image source={{ uri: recipe.image }} style={styles.imageFull} />
                        <View style={styles.overlay}>
                            <Text style={styles.title}>{recipe.name}</Text>
                        </View>
                    </View>
                </View>

                {/* Content */}
                <View style={styles.containerContent}>
                    {/* Stats 1 */}
                    <View style={styles.statsContainer}>
                        <View style={styles.statsCard}>
                            <Ionicons name="time" size={22} color={COLOR.primary}/>
                            <Text style={styles.statsValue}>{recipe.cookTimeMinutes}</Text>
                            <Text style={styles.statsLabel}>Cooking time (minutes)</Text>
                        </View>
                        <View style={styles.statsCard}>
                            <Ionicons name="time" size={22} color={COLOR.primary}/>
                            <Text style={styles.statsValue}>{recipe.prepTimeMinutes}</Text>
                            <Text style={styles.statsLabel}>Preparation time (minutes)</Text>
                        </View>
                        <View style={styles.statsCard}>
                            <Ionicons name="people" size={22} color={COLOR.primary}/>
                            <Text style={styles.statsValue}>{recipe.servings}</Text>
                            <Text style={styles.statsLabel}>Servings</Text>
                        </View>
                    </View>

                    {/* Stats 2 */}
                    <View style={styles.statsContainer}>
                        <View style={styles.statsCard}>
                            <Ionicons name="bar-chart" size={22} color={COLOR.primary}/>
                            <Text style={styles.statsValue}>{recipe.difficulty}</Text>
                            <Text style={styles.statsLabel}>Difficulty Level</Text>
                        </View>
                        <View style={styles.statsCard}>
                            <Ionicons name="earth-outline" size={22} color={COLOR.primary}/>
                            <Text style={styles.statsValue}>{recipe.cuisine}</Text>
                            <Text style={styles.statsLabel}>Cuisity</Text>
                        </View>
                    </View>
                </View>

                {/* Ingredients */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionTitleRow}>
                        <Ionicons name="list" size={16} color={COLOR.active}/>
                        <Text style={styles.titleSection}>Ingredients</Text>
                    </View>
                    <View style={styles.ingredientsGrid}>
                        {recipe.ingredients && recipe.ingredients.map((ingredient:any, index:number)=>(
                            <View key={index} style={styles.ingredientsCard}>
                                <View style={styles.ingredientsNumber}>
                                    <Text style={styles.ingredientsText}>{index + 1}</Text>
                                </View>
                                <Text style={styles.ingredientsText}>{ingredient}</Text>
                            </View> 
                        ))}
                    </View>
                </View>

                {/* Instructions */}
                <View style={styles.sectionContainer}>
                    <View style={styles.sectionTitleRow}>
                        <Ionicons name="list" size={16} color={COLOR.active}/>
                        <Text style={styles.titleSection}>Instructions</Text>
                    </View>
                    <View style={styles.ingredientsGrid}>
                        {recipe.instructions && recipe.instructions.map((instruction:any, index:number)=>(
                            <View key={index} style={styles.ingredientsCard}>
                                <View style={styles.ingredientsNumber}>
                                    <Text style={styles.ingredientsText}>{index + 1}</Text>
                                </View>
                                <Text style={styles.ingredientsText}>{instruction}</Text>
                            </View> 
                        ))}
                    </View>
                </View>

            </ScrollView>
        </LinearGradient>
    );
}
    
export default DetailRecipe

const styles = StyleSheet.create({
    container : {
        flex:1
    },
    containerContent: {
        backgroundColor: COLOR.white,
        borderRadius: 32,
        marginTop: -30,
        paddingTop: 30,
        paddingHorizontal: 16,
        paddingBottom: 40
    },
    sectionContainer: {
        marginTop: 24,
        marginHorizontal:2
    },
    sectionTitleRow: {
        flex:1,
        marginHorizontal:6,
        flexDirection:'row',
        alignItems:'center',
        gap:12,
        marginBottom: 16,
    },
    card : {
        position : 'relative',
        marginBottom: 20,
        borderRadius: 20,
    },
    statsContainer: {
        flexDirection:'row',
        marginBottom:5. 
    },
    statsCard:{
        flex:1,
        borderRadius:20,
        padding:20,
        alignItems:'center'
    },
    statsValue:{
        fontSize:18,
        fontWeight:'bold',
        color:COLOR.active,
        marginBottom:4
    },
    statsLabel:{
        fontSize:12,
        fontWeight:'semibold',
        color:COLOR.primary,
        textAlign:'center'
    },
    imageFull : {
        width: '100%',
        height: 320,
        borderRadius: 20,
        elevation: 15,
    },
    overlay:{
        position: 'absolute',
        left: 20,
        bottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '800',
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
    titleSection: {
        fontSize: 22,
        fontWeight: "600",
    },
    ingredientsGrid: {
        gap: 10, 
    },
    ingredientsCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLOR.backgroundLight,
        borderRadius: 20,
        padding: 20,
        gap: 16
    },
    ingredientsNumber: {
        width: 28,
        height: 28,
        borderRadius: 30,
        backgroundColor: COLOR.badge,
        justifyContent: "center",
        alignItems: "center"
    },
    ingredientsText: {
        fontSize:16,
        lineHeight:20,
        flexShrink: 1
    }
})
