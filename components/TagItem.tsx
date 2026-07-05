import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { FC } from 'react'
import { COLOR } from '../constants/color'  

interface Props {
    name: string;
    handleChangeRecipe: (name: string) => void;
    selectedName: string;
}

const TagItem:FC<Props> = ({name, handleChangeRecipe, selectedName}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => handleChangeRecipe(name)}>
                <View style={[selectedName === name ? styles.badgeActive : styles.badgeInactive]}>
                    <Text style={styles.badgeText}>{name}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default TagItem

const styles = StyleSheet.create({
    container : {
        flex:1
    },
    badgeActive: {
        backgroundColor: COLOR.badge,
        borderRadius: 25,
        padding: 10,
        elevation:5
    },
    badgeInactive: {
        backgroundColor: COLOR.inactive,
        borderRadius: 25,
        padding: 10,
        elevation:5
    },
    badgeText: {
        fontSize: 14,
        fontWeight: "600",
        color: COLOR.white,
    },
})