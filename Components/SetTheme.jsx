import { useContext } from "react";
import AppStartContext from "../Contexts/AppStartContext";
import { View, Text, Pressable, ImageBackground, Image } from "react-native";
export default function SetTheme() {
    const pressableTextStyle = {
        fontSize: 24,
        padding: 8,
    };

    const { isDarkTheme, changeTheme } = useContext(AppStartContext);
    return (
        <View>
            <Pressable onPress={changeTheme}>
                {isDarkTheme ? (
                    <Text style={pressableTextStyle}> ☀️ </Text>
                ) : (
                    <Text style={pressableTextStyle}> 🌙 </Text>
                )}
            </Pressable>
        </View>
    );
}
