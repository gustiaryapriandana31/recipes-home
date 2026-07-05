import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FC } from "react";
import { COLOR } from "../constants/color";


interface HeaderProps {
    backButton?:  boolean;
    title: string;
};

const Header: FC <HeaderProps> = ({ backButton = false, title }: HeaderProps) => {
    const router = useRouter();
    return (
        <View style={styles.header}>
        {backButton && (
            <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="arrow-back" size={18} color={COLOR.active} />
            </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal:20,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    color: COLOR.primary,
    letterSpacing: 1,
  },
});
