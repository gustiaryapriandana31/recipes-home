import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { COLOR } from '../../constants/color'

const TabLayouts = () => {
    return (
        <Tabs screenOptions={{
            headerShown:false, 
            tabBarActiveTintColor:COLOR.active, tabBarInactiveTintColor: COLOR.inactive,
            tabBarStyle: {
                backgroundColor:COLOR.white,
                borderTopColor:COLOR.border,
                borderTopWidth:1,
                height:60,
                paddingBottom:5
            },
            tabBarLabelStyle: {
                fontSize:10,
                fontWeight:"bold",
            }
            }}>
            <Tabs.Screen 
                name="index" 
                options={{
                    title:"Home", 
                    tabBarIcon:({color, size}) => (
                        <Ionicons name="home" size={size} color={color} />)
                    }}/>
            <Tabs.Screen 
                name="recipes" 
                options={{
                    title:"Recipes", 
                    tabBarIcon:({color, size}) => (
                        <Ionicons name="receipt" size={size} color={color} />)
                    }}/>
            <Tabs.Screen 
                name="list_recipes" 
                options={{
                    href: null
                }}/>
        </Tabs>   
    )
}

export default TabLayouts