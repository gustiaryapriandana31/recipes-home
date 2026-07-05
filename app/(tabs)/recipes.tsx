import Header from "@/components/Header";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View, Image, StyleSheet, FlatList, Alert } from "react-native";
import { COLOR } from "../../constants/color";
import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeItem from "@/components/RecipeItem";
import TagItem from "@/components/TagItem";

const RecipesScreen = () => {

    const [recipes, setRecipes] =  useState<any[]>([]);
    const [tags, setTags] = useState<string[]>([]);
    const [name, setName] = useState<string>("");

    const getRecipes = async () => {
        if(!name) {
            const { data } = await axios.get(`https://dummyjson.com/recipes?limit=50&select=id,name,image,cookTimeMinutes`);
            setRecipes(data.recipes);
        } else {
            const { data } = await axios.get(`https://dummyjson.com/recipes/tag/${name}`);
            setRecipes(data.recipes);
        }

    }
    
    const getTags = async () => {
        const { data } = await axios.get(`https://dummyjson.com/recipes/tags`);

        setTags(["All", ...data]);
    }

    const handleChangeRecipe = async (name:string) => {
        // Alert.alert(name);
        if (name === "All") {
            setName("");
        } else {
            setName(name);
        }
    }

    useEffect(() => {
        getRecipes();
        getTags();
    },[name])


    return (
        <LinearGradient
            colors={[COLOR.background, COLOR.backgroundLight]}
            style={{ flex: 1 }}>
            <Header title="International Recipes Home" />
            
            {/* List Tags */}
            <View>
                <FlatList
                    data={tags}
                    renderItem={({ item }) => (
                        <TagItem name={item} handleChangeRecipe={handleChangeRecipe} selectedName={name || "All"}/>
                    )}
                    keyExtractor={(item) => item}
                    horizontal
                    contentContainerStyle={{gap:6}}
                    style={{marginHorizontal:7,marginBottom:10}}
                />
            </View>

            {/* List Recipes */}
            <View style={{flex:1}}>
                <FlatList
                    data={recipes}
                    numColumns={2}
                    contentContainerStyle={{paddingHorizontal: 16, gap:16, paddingBottom: 20}}
                    columnWrapperStyle={{ justifyContent:'flex-start', gap:16 }}
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
                />
            </View>
        </LinearGradient>
    );
};

export default RecipesScreen;
