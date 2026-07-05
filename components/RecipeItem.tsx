import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { FC } from 'react'
import { RecipeData } from '@/app/(tabs)/index'
import { Dimensions } from 'react-native'
import { COLOR } from '../constants/color'  
import { useRouter } from 'expo-router'

const RecipeItem:FC<RecipeData> = ({id, name, image, cookTimeMinutes}) => {
    const router = useRouter();
    return (
        <TouchableOpacity onPress={()=>router.push(`/recipes/${id}`)} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{uri:image}} style={styles.image}/>
            </View>
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.cookTimeMinutes}>{cookTimeMinutes} minutes</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RecipeItem

const {width} = Dimensions.get('window')
const cardWidth = (width - 48) / 2

const styles = StyleSheet.create({
    container : {
        width: cardWidth,
        backgroundColor: COLOR.active,
        borderRadius: 16,
        marginBottom: 16,
        elevation: 4
    },
    content: {
        padding:12
    },
    imageContainer: {
        height:140,
    },
    image: {
        width: "100%", 
        height: "100%",
    },
    name: {
        fontSize: 18,
        fontWeight: "600",
        color: COLOR.white,
        marginBottom: 6,
        lineHeight: 20,
    },
    cookTimeMinutes: {
        fontSize: 10,
        color: COLOR.white,
        textShadowColor: COLOR.active,
    }
})